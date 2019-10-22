package model.webUser;

import dbUtils.DbConn;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class DbMods {

    public static StringData logonFind(String email, String pw, DbConn dbc) {
        StringData foundData = new StringData();
        if ((email == null) || (pw == null)) {
            foundData.errorMsg = "Flagrant System Error: Computer Over\n"
                    + "model.webUser.DbMods.logonFind Programmer error "
                    + "email and pw musn't be null";

            return foundData;
        }
        try {
            String sql = "SELECT web_user_id, user_email, user_password, membership_fee, birthday, image, "
                    + "web_user.user_role_id, user_role_type "
                    + "FROM web_user, user_role "
                    + "WHERE web_user.user_role_id = user_role.user_role_id "
                    + "AND user_email = ? "
                    + "AND user_password = ?";

            PreparedStatement pStatement = dbc.getConn().prepareStatement(sql);
            pStatement.setString(1, email);
            pStatement.setString(2, pw);
            ResultSet results = pStatement.executeQuery();
            if (results.next()){
                return new StringData(results);
            }
            else{
                return null;
            }
        } catch (Exception e) {
            foundData.errorMsg = "Exception in model.webUser.DbMods.logonFind()" + e.getMessage();
            System.out.println("******" + foundData.errorMsg);
            
            return foundData;
        }

    }

    public static StringDataList findById(DbConn dbc, String id) {

        StringDataList sdl = new StringDataList();
        try {
            String sql = "SELECT web_user_id, user_email, user_password, membership_fee, birthday, image, "
                    + "web_user.user_role_id, user_role_type "
                    + "FROM web_user, user_role WHERE web_user.user_role_id = user_role.user_role_id "
                    + "AND web_user_id = ?";

            PreparedStatement stmt = dbc.getConn().prepareStatement(sql);

            // Encode the id (that the user typed in) into the select statement, into the first 
            // (and only) ? 
            stmt.setString(1, id);

            ResultSet results = stmt.executeQuery();
            if (results.next()) { // id is unique, one or zero records expected in result set
                sdl.add(results);
            }
            results.close();
            stmt.close();
        } catch (Exception e) {
            StringData sd = new StringData();
            sd.errorMsg = "Exception thrown in WebUserView.getUserById(): " + e.getMessage();
            sdl.add(sd);
        }
        return sdl;

    } // getUserById

} // class
