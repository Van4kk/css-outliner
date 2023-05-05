export default class CssOutliner {

    render() {
        return `<!DOCTYPE html>
<html lang="en">
<head>
\t<meta charset="utf-8">
\t<meta name="viewport" content="width=device-width, initial-scale=1">
\t<title>CSS Outliner</title>
\t<link rel="stylesheet" type="text/css" href="../../assets/styles/css/ccs-outliner.css">
\t<script type="module" src="../src/js/popup.js" crossorigin></script>
\t<script type="module" src="../src/js/bug-report.js" crossorigin></script>
</head>
<body>
\t<div id="css-outliner-hello">Hello</div>
</body>
<body id="css-outliner-popup">
\t<div id="css-outliner-base">
\t\t<div id="css-outliner-container">
\t\t\t<div id="css-outliner-wrapper">
\t\t\t\t<div id="css-outliner-main">
\t\t\t\t\t<div id="css-outliner-content">
\t\t\t\t\t\t<div id="css-outliner-content-header">
\t\t\t\t\t\t\t<div id="css-outliner-bug-wrapper">
\t\t\t\t\t\t\t\t<div id="css-outliner-bug-button" role="button">
\t\t\t\t\t\t\t\t\t<img src="../src/assets/icons/css-outliner-bug.svg" width="33" height="28" alt="Bug Svg">
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<div id="css-outliner-menu-button-wrapper">
\t\t\t\t\t\t\t\t<div id="css-outliner-menu-button" role="button">
\t\t\t\t\t\t\t\t\t<img src="../src/assets/icons/css-outliner-menu.svg" width="23" height="18" alt="Menu Svg">
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t<div id="css-outliner-menu-wrapper" style="display: none;">
\t\t\t\t\t\t\t\t\t<div id="css-outliner-menu-list">
\t\t\t\t\t\t\t\t\t\t<div id="settings" role="button">
\t\t\t\t\t\t\t\t\t\t\t<img src="../src/assets/icons/css-outliner-settings.svg" alt="Settings icon">
\t\t\t\t\t\t\t\t\t\t\t<div>Settings</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<div id="ideas" role="button">
\t\t\t\t\t\t\t\t\t\t\t<img src="../src/assets/icons/css-outliner-ideas.svg" alt="Ideas icon">
\t\t\t\t\t\t\t\t\t\t\t<div>Send functionality ides</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<div id="feedback" role="button">
\t\t\t\t\t\t\t\t\t\t\t<img src="../src/assets/icons/css-outliner-feedback.svg" alt="Feedback icon">
\t\t\t\t\t\t\t\t\t\t\t<div>Leave feedback</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<div id="contribute" role="button">
\t\t\t\t\t\t\t\t\t\t\t<img src="../src/assets/icons/css-outliner-contribute.svg" alt="Contribute icon">
\t\t\t\t\t\t\t\t\t\t\t<div>Contribute</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div id="css-outliner-content-center">
\t\t\t\t\t\t\t<div id="css-outliner-ping-loading">
\t\t\t\t\t\t\t\t<div id="css-outliner-circles">
\t\t\t\t\t\t\t\t\t<div class="css-outliner-circle"></div>
\t\t\t\t\t\t\t\t\t<div class="css-outliner-circle">
\t\t\t\t\t\t\t\t\t\t<h1 id="css-outliner-heading">Click on "Start scan" and start debugging</h1>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t<div class="css-outliner-circle"></div>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div id="css-outliner-content-footer">
\t\t\t\t\t\t\t<div id="css-outliner-start-scan-button-wrapper">
\t\t\t\t\t\t\t\t<div id="css-outliner-start-scan-center">
\t\t\t\t\t\t\t\t\t<div id="css-outliner-start-scan-center-top"></div>
\t\t\t\t\t\t\t\t\t<div id="css-outliner-start-scan-center-bottom">
\t\t\t\t\t\t\t\t\t\t<button id="css-outliner-start-scan-button" role="button">
\t\t\t\t\t\t\t\t\t\t\t<span id="css-outliner-start-scan-button-title">Start Scan</span>
\t\t\t\t\t\t\t\t\t\t</button>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t\t<div id="css-outliner-bug-report" style="display: none;">
\t\t\t\t\t\t<div id="css-outliner-bug-report-header">
\t\t\t\t\t\t\t<div id="css-outliner-bug-report-header-content">
\t\t\t\t\t\t\t\t<span id="css-outliner-bug-report-header-title">Report a bug</span>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<div id="css-outliner-bug-report-close-button" role="button">
\t\t\t\t\t\t\t\t<img src="../src/assets/icons/css-outliner-close.svg" alt="Close bug report button">
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div id="css-outliner-bug-report-form-wrapper">
\t\t\t\t\t\t\t<form id="css-outliner-bug-report-form" autocomplete="on">

\t\t\t\t\t\t\t\t<div id="css-outliner-bug-report-form-possible-reasons-input-container">
\t\t\t\t\t\t\t\t\t<label for="css-outliner-bug-report-form-possible-reasons-input">Possible reasons..</label>
\t\t\t\t\t\t\t\t\t<input id="css-outliner-bug-report-form-possible-reasons-input" list="css-outliner-bug-report-form-possible-reasons">
\t\t\t\t\t\t\t\t\t<datalist id="css-outliner-bug-report-form-possible-reasons">
\t\t\t\t\t\t\t\t\t\t<option value="Internet Explorer">
\t\t\t\t\t\t\t\t\t\t<option value="Firefox">
\t\t\t\t\t\t\t\t\t\t<option value="Chrome">
\t\t\t\t\t\t\t\t\t\t<option value="Opera">
\t\t\t\t\t\t\t\t\t\t<option value="Safari">
\t\t\t\t\t\t\t\t\t</datalist>
\t\t\t\t\t\t\t\t\t<div class="css-outliner-bug-report-form-blob"></div>
\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t\t<div id="css-outliner-bug-report-form-email-input-container">
\t\t\t\t\t\t\t\t\t<label for="css-outliner-bug-report-form-email">Email</label>
\t\t\t\t\t\t\t\t\t<div id="css-outliner-bug-report-email-icon">
\t\t\t\t\t\t\t\t\t\t<img src="../src/assets/icons/css-outliner-mail.svg" alt="Email icon">
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t<input id="css-outliner-bug-report-form-email" type="email" minlength="4" maxlength="50">
\t\t\t\t\t\t\t\t\t<div class="css-outliner-bug-report-form-blob"></div>
\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t\t<div class="settings-input" data-v-540663fe="" data-v-d0aa69f8="">
\t\t\t\t\t\t\t\t\t<div class="title" data-v-540663fe="">Master server address</div>
\t\t\t\t\t\t\t\t\t<div class="content" data-v-540663fe="">
\t\t\t\t\t\t\t\t\t\t<div class="input" data-v-540663fe="" style="animation-duration: 0ms;">
\t\t\t\t\t\t\t\t\t\t\t<div class="image">
\t\t\t\t\t\t\t\t\t\t\t\t<img src="chrome-extension://bpoljniljbghlopcdaojdpodmnjffdeb/dist/assets/wrench.6b7ea415.svg">
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t<input data-mask-raw-value="" placeholder="Enter address" type="text" data-mask="E*" data-mask-inited="true">
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t\t<div class="settings-list" data-v-34e28316="" data-v-d0aa69f8="">
\t\t\t\t\t\t\t\t\t<div class="title" data-v-34e28316="">Language selection</div>
\t\t\t\t\t\t\t\t\t<div class="list" data-v-620959a4="" data-v-34e28316="">
\t\t\t\t\t\t\t\t\t\t<div class="main" data-v-620959a4="">
\t\t\t\t\t\t\t\t\t\t\t<div class="left" data-v-620959a4="">
\t\t\t\t\t\t\t\t\t\t\t\t<img src="/dist/assets/chat.4734e6c9.svg" class="chat" data-v-620959a4="">
\t\t\t\t\t\t\t\t\t\t\t\t<div class="selected" data-v-620959a4="">English</div>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t<img src="/dist/assets/arrow.2b01ede2.svg" class="arrow active" data-v-620959a4="">
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<div class="additional" data-v-620959a4="">
\t\t\t\t\t\t\t\t\t\t\t<div class="list" data-v-620959a4="">
\t\t\t\t\t\t\t\t\t\t\t\t<div class="point" data-v-620959a4="">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="title" data-v-620959a4="">Русский</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<img src="/dist/assets/mark.8fc642ee.svg" class="mark" data-v-620959a4="">
\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t<div class="point active" data-v-620959a4="">
\t\t\t\t\t\t\t\t\t\t\t\t<div class="title" data-v-620959a4="">English</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<img src="/dist/assets/mark.8fc642ee.svg" class="mark" data-v-620959a4="">
\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t<div class="point" data-v-620959a4="">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="title" data-v-620959a4="">Українська</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<img src="/dist/assets/mark.8fc642ee.svg" class="mark" data-v-620959a4="">
\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t\t<div id="css-outliner-bug-report-form-show-email-input-container">
\t\t\t\t\t\t\t\t\t<label for="css-outliner-bug-report-form-show-email">Check box for email</label>
\t\t\t\t\t\t\t\t\t<input id="css-outliner-bug-report-form-show-email" type="checkbox" value="0">
\t\t\t\t\t\t\t\t\t<div class="css-outliner-bug-report-form-blob"></div>
\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t\t<div id="css-outliner-bug-report-form-title-input-container">
\t\t\t\t\t\t\t\t\t<label for="css-outliner-bug-report-form-show-title">Title</label>
\t\t\t\t\t\t\t\t\t<input id="css-outliner-bug-report-form-show-title" required>
\t\t\t\t\t\t\t\t\t<div class="css-outliner-bug-report-form-blob"></div>
\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t\t<div id="css-outliner-bug-report-form-message-input-container">
\t\t\t\t\t\t\t\t\t<label for="css-outliner-bug-report-form-show-message">Message</label>
\t\t\t\t\t\t\t\t\t<textarea id="css-outliner-bug-report-form-show-message" rows="6" maxlength="300" form="css-outliner-bug-report-form" required></textarea>
\t\t\t\t\t\t\t\t\t<div class="css-outliner-bug-report-form-blob"></div>
\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t\t<div id="#css-outliner-bug-report-form-submit-button-container">
\t\t\t\t\t\t\t\t\t<input type="submit" role="button" placeholder="Send Bug">
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</form>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t\t<div id="css-outliner-settings-window"></div>
\t\t\t\t<div id="css-outliner-ideas-window"></div>
\t\t\t\t<div id="css-outliner-feedback-window"></div>
\t\t\t</div>
\t\t</div>
\t</div>
</body>
</html>`
    }
}