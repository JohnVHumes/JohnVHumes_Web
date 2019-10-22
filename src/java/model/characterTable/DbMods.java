package model.characterTable;

import dbUtils.DbConn;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class DbMods {

    public static StringDataList findById (DbConn dbc, String id) {
        
        StringDataList sdl = new StringDataList();
        try {
            String sql = "SELECT character_id, character_name, character_level, character_interaction, img, "
                    + "character_table.faction_id, faction_name "
                    + "FROM character_table, faction_table where character_table.faction_id = faction_table.faction_id "
                    + "AND character_id = ?";

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
            sd.errorMsg = "Exception thrown in characterTableView.findById(): " + e.getMessage();
            sdl.add(sd);
        }
        return sdl;

    } // getCharacterById
    
} // class
