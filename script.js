function pasteCode(elementId) {
    navigator.clipboard.readText().then(text => {
        document.getElementById(elementId).value = text;
    }).catch(err => {
        alert('Erro ao colar código: ' + err);
    });
}

function runCode() {
    const htmlCode = document.getElementById('html-code').value;
    const cssCode = `<style>${document.getElementById('css-code').value}</style>`;
    const jsCode = `<script>${document.getElementById('js-code').value}<\/script>`;

    const output = htmlCode + cssCode + jsCode;

    const iframe = document.getElementById('output-frame');
    iframe.contentDocument.open();
    iframe.contentDocument.write(output);
    iframe.contentDocument.close();
}
function runCode() {
    const htmlCode = document.getElementById('html-code').value;
    const cssCode = `<style>${document.getElementById('css-code').value}</style>`;
    const jsCode = `<script>${document.getElementById('js-code').value}<\/script>`;

    const output = htmlCode + cssCode + jsCode;

    const iframe = document.getElementById('output-frame');
    iframe.contentDocument.open();
    iframe.contentDocument.write(output);
    iframe.contentDocument.close();
}
