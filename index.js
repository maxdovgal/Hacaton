function generate() {
    const sessionId = generateId();
    document.getElementById('mentor').href = `${document.URL}mentor/mentor.html?sessionId=${sessionId}`;
    document.getElementById('student').href = `${document.URL}student/student.html?sessionId=${sessionId}`;
    document.getElementById('chat').href = `${document.URL}app-chat/chat.html?sessionId=${sessionId}`;
    document.getElementById('result').href = `${document.URL}app-result/result.html?sessionId=${sessionId}`;
}
