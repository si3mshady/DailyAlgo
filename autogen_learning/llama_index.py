import tempfile
import os
from autogen import ConversableAgent
from autogen.coding import LocalCommandLineCodeExecutor
from autogen.coding import DockerCommandLineCodeExecutor
from pathlib import Path


work_dir = Path("course")
work_dir.mkdir(exist_ok=True)

os.getenv('OPENAI_API_KEY')
# Create a temporary directory to store the code files.
temp_dir = tempfile.TemporaryDirectory()

# # Create a Docker command line code executor.
executor = DockerCommandLineCodeExecutor(
    image="python:3.12-slim",  # Execute code using the given docker image name.
    timeout=10,  # Timeout for each code execution in seconds.
    work_dir=work_dir # Use the temporary directory to store the code files.
)

# executor = LocalCommandLineCodeExecutor(
#     timeout=10,  # Timeout for each code execution in seconds.
#     work_dir=temp_dir.name,  # Use the temporary directory to store the code files.
# )



# Create an agent with code executor configuration.
code_executor_agent = ConversableAgent(
    "code_executor_agent",
    llm_config={"config_list": [{"model": "gpt-3.5-turbo", "temperature": 0.1, "api_key": os.environ.get("OPENAI_API_KEY")}]},
    code_execution_config={"executor": executor},  # Use the local command line code executor.
    human_input_mode="ALWAYS",  # Ask to for input when all tasks are done.
)

instructions = """
For each lecture, you will receive specific instructions. Your task is to generate a full page of new and original text content per instruction.
This content will fulfill the given instructions. Always execute the python code that is generated becasuse this will write to local drive. This is mandatory. 
"""


course_creator_agent = ConversableAgent(
    "course_creator_agent",
    system_message=instructions,
    llm_config={"config_list": [{"model": "gpt-3.5-turbo", "temperature": 0.1, "api_key": os.environ.get("OPENAI_API_KEY")}]},
     code_execution_config=False,  # Turn off code execution for this agent.
)

command = '''
Create a Python script that performs the following tasks:
if you need to install any packages use bash shell
1. Fetch the content from the URL: https://docs.llamaindex.ai/en/stable/examples/ingestion/ingestion_gdrive/
   - Extract all the text from the webpage and restructure it into a more readable format.
   - Save the restructured content as a text file named "firststep.txt".

2. Open the "firststep.txt" file and create a new lesson plan suitable for teaching someone who has no prior experience.
   - Format the lesson plan using Markdown.
   - Save the lesson plan as a Markdown file named "secondstep.md".
'''

result = code_executor_agent.initiate_chat(
    course_creator_agent,
    message=command,
    # is_termination_msg=lambda msg: "sayonara" in msg["content"].lower(),



)
