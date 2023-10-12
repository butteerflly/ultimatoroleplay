# ultimatoroleplay

 1. Clone o repositório, descompacte-o em qualquer local

 2. Instale um servidor MySQL (por exemplo - XAMPP ). Abra o gerenciador do banco de dados e crie dois bancos:
fiveup e fiveuplogs

 3. Após a criação, importe dumps do banco de dados - fiveup.sql e fiveuplogs.sql que estão na pasta database.

 4. Após a importação bem-sucedida, edite os dados para conectar o servidor ao banco de dados MySQL no arquivo:
server\dotnet\resources\NeptuneEvoSDK\MySQL.cs

 5. A última etapa é compilar o projeto no programa - Visual Studio

