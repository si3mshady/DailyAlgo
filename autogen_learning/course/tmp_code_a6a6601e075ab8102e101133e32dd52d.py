import requests
from bs4 import BeautifulSoup

# Fetching content from the URL
url = "https://docs.llamaindex.ai/en/stable/examples/ingestion/ingestion_gdrive/"
response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

# Extracting all text from the webpage
text_content = ""
for paragraph in soup.find_all('p'):
    text_content += paragraph.get_text() + "\n"

# Restructuring the content for readability
restructured_content = text_content.replace("\n", "\n\n")

# Saving the restructured content as a text file
with open("firststep.txt", "w") as file:
    file.write(restructured_content)

print("Content has been saved to firststep.txt")