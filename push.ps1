Write-Host "Vuoi fare commit + push? (Y/N)"
$answer = Read-Host

if ($answer -eq "Y" -or $answer -eq "y") {

    Write-Host "Aggiungo file..."
    git add .

    Write-Host "Inserisci messaggio commit:"
    $msg = Read-Host

    git commit -m "$msg"

    Write-Host "Push in corso..."
    git push

    Write-Host "Fatto ✔"
}
else {
    Write-Host "Operazione annullata"
}