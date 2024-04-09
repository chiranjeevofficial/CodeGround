package javaapplication1;

import java.sql.Connection;
import java.sql.*;
import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {
        String url = "jdbc:postgresql://10.0.6.172:5432/api_db";
        String user = "postgres";
        String password = "Password@123";

        ArrayList<Employee> employees = new ArrayList<>();
        employees.add(new Employee(7, "Atal", 22));
        employees.add(new Employee(8, "Kartik", 19));
        employees.add(new Employee(9, "Anuj", 35));

        try {
            Connection con = DriverManager.getConnection(url, user, password);
            String query = "INSERT INTO employee (id, name, age) VALUES (?, ?, ?)";
            PreparedStatement statement = con.prepareStatement(query);
            for (Employee employee : employees) {
                statement.setInt(1, employee.getId());
                statement.setString(2, employee.getName());
                statement.setInt(3, employee.getAge());
                statement.addBatch(); // Add the prepared statement to the batch
            }

            statement.executeBatch(); // Execute the batch
            System.out.println("Data inserted successfully.");
            /*String query = "select * from employee";
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String name = resultSet.getString("name");
                int age = resultSet.getInt("age");
                System.out.println("ID: " + id + ", Name: " + name + ", Age: " + age);
            }
            System.out.println(connection);*/
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }
}
