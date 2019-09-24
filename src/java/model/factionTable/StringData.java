/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model.factionTable;

import dbUtils.FormatUtils;
import java.sql.ResultSet;

/**
 *
 * @author tuh41347
 */
public class StringData {

    public String factionID = "";
    public String factionName = "";
    public String factionImgURL = "";
    public String factionDescription = "";
    public String factionMembership = "";
    public String webUserID = "";   // Foreign Key
    
    
    public String errorMsg = "";
    
    public StringData(){
    
    }
    
    public StringData(ResultSet results) {
        try {
            this.factionID = FormatUtils.formatInteger(results.getObject("faction_id"));
            this.factionName = FormatUtils.formatString(results.getObject("faction_name"));
            this.factionImgURL = FormatUtils.formatString(results.getObject("img_url"));
            this.factionDescription = FormatUtils.formatString(results.getObject("faction_description"));
            this.factionMembership = FormatUtils.formatInteger(results.getObject("faction_membership"));
            this.webUserID = FormatUtils.formatInteger(results.getObject("faction_table.web_user_id"));
        } catch (Exception e) {
            this.errorMsg = "Exception thrown in model.factionTable.StringData (the constructor that takes a ResultSet): " + e.getMessage();
        }
    }
        public int getCharacterCount() {
        String s = this.factionID + this.factionName + this.factionImgURL + this.factionDescription
                + this.factionMembership + this.webUserID;
        return s.length();
    }
        
        public String toString() {
        return "Faction ID:" + this.factionID
                + ", Name: " + this.factionName
                + ", IMG URL: " + this.factionImgURL
                + ", Description: " + this.factionDescription
                + ", Members:" + this.factionMembership
                + ", Faction added by User: " + this.webUserID;
    }


}
