import jakarta.servlet.*;
import java.io.*;

public class MyServlet extends GenericServlet {
    public void service(ServletRequest req, ServletResponse res) throws ServletException, IOException {
        PrintWriter pw = res.getWriter();
        pw.println("Namaste JakartaEE!");
    }
}