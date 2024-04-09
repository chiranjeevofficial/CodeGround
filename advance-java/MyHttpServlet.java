import javax.servlet.*;
import java.io.*;
import javax.servlet.Http;

public class MyHttpServlet extends HttpServlet {
    public void doGet(HttpServletRequest req, HttpServletResponse res) {
        PrintWriter ps = res.getWriter();
        pw.println("<html><body>");
        for (int i = 1 ; i <= 6 ; i++) 
            pw.println("<h"+i+">Namaste Narayan!</h"+i+">");
        pw.pritnln("</htnl></body>");
    }
}

//FU#$321nbspl