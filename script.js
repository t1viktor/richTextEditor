document.addEventListener('DOMContentLoaded', function () {
    let output = document.getElementById('output');
    let buttons = document.getElementsByClassName('tool--btn');

    for (let btn of buttons) {
        btn.addEventListener('click', () => {
            let cmd = btn.dataset['command'];
            if (cmd === 'createlink') {
                let url = prompt("Enter the link here: ", "http:\/\/");
                if (url && url !== "http://") {
                    document.execCommand(cmd, false, url);
                }
            } else if (cmd === 'bold' || cmd === 'italic' || cmd === 'underline') {
                toggleStyle(cmd);
            } else {
                document.execCommand(cmd, false, null);
            }
        });
    }

    function toggleStyle(command) {
        let isActive = document.queryCommandState(command);
        document.execCommand(command, false, !isActive);
    }
});
