# Advance Java

## 01 Jakarta Version History and Enterprise Application

### What is JavaEE?
- In current time, there are not any term JavaEE, JavaEE change to JakartaEE. Oracle have proprity of JavaEE. In 2015, oracle think its not able to manage the JavaEE or not design at the market standards. Then Oracle make the allience, in that allience **IBM, Apache or RedHat** support the Oracle and All make the effort to go Java the real position, but all that not make the Java better.

- In Java, Python, .net or php, which is good for application perspective view ?
    - **.Net 7.x** version is good for application development.

- continue, oracle lanuched the JavaEE 8 version in Aug 2017, in 2017 oracle declare the he handover the JavaEE beacuse he cannot handle it. Oracle transfer the proprity to Eclipse, then Eclipse change the name from JavaEE to JakartaEE.

    - In Aug 2019, JakaratEE 8 new version launched its fully backward compatiable.
    
### Current Version are - 

| Version | Date or Description | 
| --- | --- |
| 8 | Aug 2019, fully backward compatiable |
| 9 | Dec 2020 |
| 9.1 | May 2021 |
| 10 | Sep 2022 |
    
- Which type of Application we made using JakartaEE ?
    - using JakaratEE we made Enterprise Application.

### Enterprise Application based on 4 layers

| SN | layer | Components | Description |
| :---: | --- | --- | --- |
| 1 | Web Layer | Servlet or JSP | Its used to make web application. |
| 2 | Web Service Layer | Rest API | Its communicate between application and server. |
| 3 | Enterprise Layer | JTA, JPA, JMS or etc | Its used to manage the transaction |
| 4 | Other Layer | Connector or Validators | Its used to managing the server. |

- JTA (Java Transaction API) : Its used to manage the transaction.
- JPA (Java Persistence API) : Its used to manage the database state, JDBC -> JPA -> ORM (Object Relational Mapping) Hybernet.
- JMS (Java Messaging Services) : Its used to managing message system in Bulk.

### Desktop Application GUI

| Component | Description | 
| --- | --- |
| UI | Swing or AWT |
| Data Layer | JDBC |
| Data Management | Collection Framework |

## 02 Web App and Server Internal Processing

There are 3 types of Application
| Application | Description |
| --- | --- | 
| Desktop Application | Which have Physical Boundry |
| Mobile Application | Which application run Mobile Device |
| Web Application | -- |

- Android Development
    - Java
    - Kotlin

- iOS Development
    - Objective C
    - Swift

- Cross Platform
    - Flutter based on DART
    - React Native based on JavaScript

- Difference Between API, Library, Framework

| Feature | API | Library | Framework |
| --- | --- | --- | --- |
| Definition | A set of rules that define how two pieces of software can communicate with each other. | A collection of pre-written code that developers can use in their own applications. | A more comprehensive software development tool than a library that provides a set of pre-written code and conventions that can be used to build a complete application. |
| Use cases | Used to allow developers to integrate their applications with other services. | Used to perform common tasks in software applications. | Used to build complete software applications. |
| Level of control | Developers have complete control over how the API is used in their application. | Developers have complete control over how the library is used in their application. | Developers have less control over how the framework is used in their application, but they benefit from the pre-written code and conventions that the framework provides. |

- Every Web Service is a Web API.

Examples:
- API: Google Maps API, Twitter API, Facebook API.
- Library: Python standard library, NumPy library, OpenCV library.
- Framework: Django web framework, React Native mobile framework, Laravel PHP framework.

- Browser is Desktop or Web Application ?
    - is Desktop Application.

- What is SSL ?
    - SSL (Secure Socket Layer) is a one type of certificate, which provide some encryption.

There are 2 types of web application.
- Web Application
    - Static Web Application (Website)
    - Dynamic Web Application (Web Portal & Web App)

- Web application are deploy some where not install.
- Server is a desktop application.

Server Specification

| Name | Who Made | 
| --- | --- |
| **Tomcat** | **Apache** |
| JBOSS | JBOSS |
| Web Logic | Oracle |
| Web Sphere | IBM |
| Glan Fish | Sun -> Oracle |

## 03 Tomcat Installation & First Program

- We make program which are run on web layer. These are 2 types - Servlet or JSP.
- Spring Boot are also using the Servlet Technology.
- Servlet is a Web Layer Component, its a Servlet Technology, class, Interface or API.
- Servlet runs on inside server or server end.

    ### How to make Servlet
    - Make a class extened by GenericServlet Class.
    ```Java
    class MyServlet extends GenericServlet {
        // code
    }
    ```
    - Servlet Execution start from Service.
    - GenricServlet already implements the Servlet Interface.
    - main() method prototye are predifined and its body are user defined.
    - GenericServlet Class are have the Service() method but its `abstract method,` then its your duty to override the Service() method to beware of Compile-Time Error.
    ```Java
    class MyServlet extends GenericServlet {
        public void service(ServletRequest req, ServletResponse res) throws ServletException, IOException {
            // code
        }
    }
    ```
    - Who are call the service() method?
    - Server are have 2 parts - Application or Web Server, Application Server handle the Servlet or other Stuffs and its call the Service() method.
    - Using PrintWriter class we print(show) data on web page and println() method.
    ```Java
    class MyServlet extends GenericServlet {
        public void service(ServletRequest req, ServletResponse res) throws ServletException, IOException {
            PrintWriter pw = res.getWriter();
            pw.println("Namaste JavaEE!");
        }
    }
    ```
    - GenericServlet, ServletRequest, ServletResponse or ServletException are available in `javax.servlet.*` package and IOException or PrintWriter are avialble in `java.io.*` package;
    ```Java
    import javax.servlet.*;
    import java.io.*;
    class MyServlet extends GenericServlet {
        public void service(ServletRequest req, ServletResponse res) throws ServletException, IOException {
            PrintWriter pw = res.getWriter();
            pw.println("Namaste JavaEE!");
        }
    }
    ```
    - when you compile your code you get some error its ok, but we want to set the `ClassPath` of JakartaEE Classes.
    ```unix
    set classpath=C:\Program Files\Apache Software Foundation\Tomcat 9.0_Tomcat9.0\lib\servlet-api.jar;
    ```

## 04 Execution of Servlet and Deployment Descriptor File

### How many type of Mapping
 | Name | Description |
 | --- | --- |
 | Exect Mapping | When complete url-pattern are exect match |
 | Directory Mapping | When only directory are exact match and wild card are not mandatory |
 | Extension Mapping | When only extension are exact match and before path is not mandatory |

## 05 HTTP Based Servlet
- Apache Tomcat8 belongs to JavaEE8
- Apache Tomcat9 belongs to JakartaEE8
- Apache Tomcat10 belongs to JakartaEE9

## XX Init & Context Parameter
- Just think, your database credidential doesn't constant its not always same then changes are applied when you re-compiled code and server are restart or application down.
- Because of that we use it External Paramater `Initialization or Context Parameter`.
- Initialization Parameter use for Each Servlet. `<init-param></init-param>`
- Context Parameter use for Every Servlet.
- After use of it we don't restart the server.
- Parameter set using two ways
    - using web.xml (using notepad)
    - using @annotation (using ide)
