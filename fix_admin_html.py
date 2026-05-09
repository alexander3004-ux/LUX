with open("admin.html", "r") as f:
    content = f.read()

# remove the appended part that ended up after </html>
if "</body>\n</html>\n\n    <!-- Restaurant Form Modal -->" in content:
    content = content.replace("</body>\n</html>\n\n    <!-- Restaurant Form Modal -->", "    <!-- Restaurant Form Modal -->")
    content += "\n</body>\n</html>"

with open("admin.html", "w") as f:
    f.write(content)
