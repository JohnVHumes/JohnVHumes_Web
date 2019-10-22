/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model.characterTable;

import dbUtils.FormatUtils;
import java.sql.ResultSet;

/**
 *
 * @author tuh41347
 */
public class StringData {

    public String charID = "";
    public String charName = "";
    public String charLevel = "";
    public String charInteraction = "";
    public String factionID = "";
    public String image="";
    public String factionName = "";   // Foreign Key
    
    
    public String errorMsg = "";
    
    public StringData(){
    
    }
    
    public StringData(ResultSet results) {
        try {
            this.charID = FormatUtils.formatInteger(results.getObject("character_id"));
            this.charName = FormatUtils.formatString(results.getObject("character_name"));
            this.charLevel = FormatUtils.formatInteger(results.getObject("character_level"));
            this.charInteraction = FormatUtils.formatString(results.getObject("character_interaction"));
            this.factionID = FormatUtils.formatInteger(results.getObject("character_table.faction_id"));
            this.image=FormatUtils.formatString(results.getObject("img"));
            this.factionName = FormatUtils.formatString(results.getObject("faction_name"));
        } catch (Exception e) {
            this.errorMsg = "Exception thrown in model.characterTable.CharacterData (the constructor that takes a ResultSet): " + e.getMessage();
        }
    }
        public int getCharacterCount() {
        String s = this.charID + this.charName + this.charLevel + this.charInteraction
                + this.factionID + this.factionName;
        return s.length();
    }
        
        public String toString() {
        return "Character ID:" + this.charID
                + ", Name: " + this.charName
                + ", Level: " + this.charLevel
                + ", Support table: " + this.charInteraction
                + ", Faction ID:" + this.factionID
                + ", Image URL:" + this.image
                + ", Faction Name: " + this.factionName;
    }


}
