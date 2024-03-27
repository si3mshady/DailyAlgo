import tempfile
import os
from autogen import ConversableAgent
from autogen.coding import LocalCommandLineCodeExecutor
from autogen.coding import DockerCommandLineCodeExecutor
from pathlib import Path


work_dir = Path("elliott_arnold_linkedin")
work_dir.mkdir(exist_ok=True)


# Create a temporary directory to store the code files.
temp_dir = tempfile.TemporaryDirectory()

# Create a Docker command line code executor.
executor = DockerCommandLineCodeExecutor(
    image="python:3.12-slim",  # Execute code using the given docker image name.
    timeout=10,  # Timeout for each code execution in seconds.
    work_dir=work_dir # Use the temporary directory to store the code files.
)

# Create an agent with code executor configuration.
code_executor_agent = ConversableAgent(
    "code_executor_agent",
    llm_config=False,
    code_execution_config={"executor": executor},  # Use the local command line code executor.
    human_input_mode="NEVER",  # Ask to for input when all tasks are done.
)

instructions = """
For each lecture, you will receive specific instructions. Your task is to generate a full page of new and original text content per instruction. This content will fulfill the given instructions. For instance, if instructed to create a meal plan, you must generate a complete meal plan. Your objective is to create Python code for each step that will generate the content required for the course and write it to a file.
"""


course_creator_agent = ConversableAgent(
    "course_creator_agent",
    system_message=instructions,
    llm_config={"config_list": [{"model": "gpt-3.5-turbo", "temperature": 0.1, "api_key": os.environ.get("OPENAI_API_KEY")}]},
     code_execution_config=False,  # Turn off code execution for this agent.
)



command = '''

 Master Directive: This Python string contains a set of instructions, with each lecture as a separate unit of work to be passed to a downstream process for completion. This process is iterative, with each lecture ultimately having a separate file associated with it.

1. Lecture 1: Define Course Objectives and Structure:
   - Present a detailed overview of the course objectives, focusing on the journey from overweight to Olympian.
   - Explain the course structure, highlighting the order of lectures and the topics covered in each session.

2. Lecture 2: Develop Course Content - Meal Planning:
   - Craft a month-long meal plan aimed at weight loss and enhancing athletic performance.
   - Ensure meals are well-balanced with lean proteins, complex carbohydrates, and healthy fats.
   - Specify portion sizes and meal timings to optimize energy levels and support muscle recovery.

3. Lecture 3: Develop Course Content - Workout Planning:
   - Create a comprehensive workout plan for one month, incorporating cardiovascular exercises, strength training, and flexibility workouts.
   - Provide detailed instructions for each exercise, including proper form, sets, repetitions, and rest periods.
   - Offer alternative exercises suitable for varying fitness levels and equipment availability.

4. Lecture 4: Develop Course Content - Nutritional Education:
   - Educate participants on nutrition principles, covering macronutrients, micronutrients, and calorie balance.
   - Emphasize the significance of nutrient timing, hydration, and supplementation for optimal performance and recovery.
   - Dispel common myths and misconceptions surrounding dieting and weight loss.

5. Lecture 5: Develop Course Content - Motivational Advice:
   - Provide motivational guidance to inspire and support participants throughout their transformation journey.
   - Share success stories and testimonials to illustrate achievable transformations.
   - Equip participants with strategies to overcome obstacles, maintain motivation, and sustain consistency.

6. Lecture 6: Develop Course Content - Exercise Plans without a Gym:
   - Devise alternative exercise plans suitable for home or outdoor settings, requiring minimal equipment.
   - Incorporate bodyweight exercises, resistance band workouts, and circuit training routines targeting various muscle groups.
   - Encourage creativity and adaptability in designing effective workouts outside traditional gym environments.

7. Lecture 7: Develop Course Content - Food Preparation Techniques:
   - Demonstrate food preparation methods to streamline meal planning and cooking processes.
   - Instruct participants on batch cooking, meal prepping, and proper food storage techniques for convenience and efficiency.
   - Provide tips for infusing healthy ingredients and flavors into everyday meals.

8. Lecture 8: Create Interactive Components:
   - Design interactive quizzes to reinforce learning objectives and assess comprehension.
   - Develop challenges and assignments to foster active engagement and participation.
   - Implement progress tracking mechanisms to monitor participants' progress and accomplishments.

9. Lecture 9: Finalize Course Delivery Platform:
   - Choose a user-friendly online learning platform or content management system for hosting course materials.
   - Customize the platform to optimize accessibility and user experience.
   - Conduct thorough testing to ensure seamless navigation and functionality across different devices.

10. Lecture 10: Launch and Promote the Course:
    - Develop a comprehensive marketing strategy encompassing social media campaigns, email newsletters, and promotional incentives.
    - Create engaging promotional materials such as videos, testimonials, and blog posts to attract potential participants.
    - Launch the course with an attention-grabbing introduction and enrollment incentives to drive interest and enrollment.

11. Lecture 11: Provide Ongoing Support and Engagement:
    - Establish effective communication channels for delivering ongoing support to participants, including discussion forums, email support, and live chat.
    - Schedule regular Q&A sessions and webinars to address queries, offer guidance, and encourage community interaction.
    - Encourage participants to actively engage with the community by sharing progress, achievements, and challenges for support and accountability.

12. Lecture 12: Evaluate and Iterate:
    - Monitor participant engagement and satisfaction metrics to assess the course's effectiveness.
    - Gather feedback through surveys and evaluations to identify strengths, weaknesses, and areas for improvement.
    - Utilize feedback to refine course content, delivery methods, and interactive components for continuous enhancement.

'''


result = code_executor_agent.initiate_chat(
    course_creator_agent,
    message=command,
    is_termination_msg=lambda msg: "goodbye" in msg["content"].lower(),



)
