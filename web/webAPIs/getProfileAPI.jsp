<%@page contentType="application/json; charset=UTF-8" pageEncoding="UTF-8"%> 
<%@page language="java" import="com.google.gson.*" %>

<%@page language="java" import="model.webUser.*" %> 
<%@page language="java" import="view.WebUserView" %> 
<%
    Gson gson = new Gson();
    StringData prof = new StringData();
    prof = (StringData)session.getAttribute("UserLogin");
    out.print(gson.toJson(prof).trim());
%>