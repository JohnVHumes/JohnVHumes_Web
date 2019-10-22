package model.factionTable;

import dbUtils.DbConn;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class DbMods {

    public static StringDataList findById(DbConn dbc, String id) {

        StringDataList sdl = new StringDataList();
        try {
            String sql = "SELECT faction_id, faction_name, img_url, faction_description, faction_membership, "
                    + "faction_table.web_user_id, user_email "
                    + "FROM faction_table, web_user where faction_table.web_user_id = web_user.web_user_id "
                    + "AND faction_id = ?";

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
            sd.errorMsg = "Exception thrown in factionTableView.getUserById(): " + e.getMessage();
            sdl.add(sd);
        }
        return sdl;

    } // getfactionById

} // class
