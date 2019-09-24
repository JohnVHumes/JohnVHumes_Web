package view;

// classes imported from java.sql.*
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import model.characterTable.*;

// classes in my project
import dbUtils.*;

public class CharacterView {

    public static StringDataList allCharactersAPI(DbConn dbc) {

        //PreparedStatement stmt = null;
        //ResultSet results = null;
        StringDataList sdl = new StringDataList();
        try {
            String sql = "SELECT character_id, character_name, character_level, character_interaction, "
                    + "character_table.faction_id, faction_name "
                    + "FROM character_table, faction_table where character_table.faction_id = faction_table.faction_id "
                    + "ORDER BY character_name ";  // you always want to order by something, not just random order.
            PreparedStatement stmt = dbc.getConn().prepareStatement(sql);
            ResultSet results = stmt.executeQuery();
            while (results.next()) {
                sdl.add(results);
            }
            results.close();
            stmt.close();
        } catch (Exception e) {
            StringData sd = new StringData();
            sd.errorMsg = "Exception thrown in CharacterView.allUsersAPI(): " + e.getMessage();
            sdl.add(sd);
        }
        return sdl;
    }

}