for /R %%i in (*.txt) do (
copy %%i %%~dpi%%~ni.java
del %%i
)