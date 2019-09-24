package view;

// classes imported from java.sql.*
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import model.factionTable.*;

// classes in my project
import dbUtils.*;

public class FactionView {

    public static StringDataList allFactionsAPI(DbConn dbc) {

        //PreparedStatement stmt = null;
        //ResultSet results = null;
        StringDataList sdl = new StringDataList();
        try {
            String sql = "SELECT faction_id, faction_name, img_url, faction_description, faction_membership, "+
                    "faction_table.web_user_id, user_email "+
                    "FROM faction_table, web_user where faction_table.web_user_id = web_user.web_user_id " + 
                    "ORDER BY faction_name ";  // you always want to order by something, not just random order.
            PreparedStatement stmt = dbc.getConn().prepareStatement(sql);
            ResultSet results = stmt.executeQuery();
            while (results.next()) {
                sdl.add(results);
            }
            results.close();
            stmt.close();
        } catch (Exception e) {
            StringData sd = new StringData();
            sd.errorMsg = "Exception thrown in FactionView.allFactionsAPI(): " + e.getMessage();
            sdl.add(sd);
        }
        return sdl;
    }

}