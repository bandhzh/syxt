for /R %%i in (*.java) do (
copy %%i %%~dpi%%~ni.txt
del %%i
)