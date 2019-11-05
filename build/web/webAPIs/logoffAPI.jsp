<%@page contentType="application/json; charset=UTF-8" pageEncoding="UTF-8"%> 

<%@page language="java" import="com.google.gson.*" %>

<%
    if(!(session.getAttribute("UserLogin")==null)){
    session.invalidate();
    }
%>
