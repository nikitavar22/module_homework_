const clientMessageBox = document.querySelector("textarea");

const sendMessageButton = document.querySelector(".btn-send");
sendMessageButton.addEventListener('click', sendMsgButtonClickHandler);

const sendGeoMessageButton = document.querySelector(".btn-geo");
sendGeoMessageButton.addEventListener('click', sendGeoButtonClickHandler);

const messageContainer = document.querySelector(".messages-container");

let skipEchoMessage = false;
let repeatIntervalId = 0;
let echoWebSocket;
function initEchoWebSocket() {
    echoWebSocket = new WebSocket("wss://echo-ws-service.herokuapp.com");

    echoWebSocket.onopen = () => {
        addMessage(getServerMessageCode("Привет! Соединение установлено."));
        clearInterval(repeatIntervalId);
    }
    echoWebSocket.onclose = () => {
        addMessage(getServerMessageCode("Соединение закрыто. Повторная попытка через 10 секунд."));
        if (repeatIntervalId === 0)
            repeatIntervalId = setInterval(() => initEchoWebSocket(), 10000);
    }
    echoWebSocket.onmessage = (event) => {
        if (!skipEchoMessage) addMessage(getServerMessageCode(event.data));
        skipEchoMessage = false;
    }
    echoWebSocket.onerror = () => {
        addMessage(getServerErrorMessageCode("Произошла ошибка."));
    }
}

initEchoWebSocket();

function sendMsgButtonClickHandler() {
    if (clientMessageBox.value.length === 0) return;

    addMessage(getClientMessageCode(clientMessageBox.value));
    echoWebSocket.send(clientMessageBox.value);

    clientMessageBox.value = "";
}

function sendGeoButtonClickHandler() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(success, error);

        function success(position) {
            const link = `https://www.openstreetmap.org/#map=18/${position.coords.latitude}/${position.coords.longitude}`;
            addMessage(getClientMessageCode(`<a href="${link}" target="_blank" style="text-decoration: none; color: dodgerblue">Гео-локация</a>`));

            skipEchoMessage = true;
            echoWebSocket.send(clientMessageBox.value);
        }

        function error() {
            addMessage(getClientMessageCode("Ошибка получения гео-локации."));
        }
    } else {
        addMessage(getClientMessageCode("Местоположение недоступно."));
    }
}

function getClientMessageCode(text) {
    return `<div class="message right-message">
              <span>${text}</span>
            </div>`
}

function getServerMessageCode(text) {
    return `<div class="message left-message">
              <span>${text}</span>
            </div>`
}

function getServerErrorMessageCode(text) {
    return `<div class="message error-message">
              <span>${text}</span>
            </div>`
}

function addMessage(data) {
    messageContainer.innerHTML += data;
    scrollMsgContainerToBottom();
}

const scrollMsgContainerToBottom = () => messageContainer.scrollTop = messageContainer.scrollHeight;