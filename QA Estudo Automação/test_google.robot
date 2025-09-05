*** Settings ***
Library    SeleniumLibrary

*** Test Cases ***
Abrir Google
    Open Browser    https://www.google.com    chrome
    Page Should Contain    Google
    Close Browser
