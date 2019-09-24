/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model.characterTable;
import java.util.ArrayList;
import java.sql.ResultSet;


 public class StringDataList {

    public String dbError = "";
    public ArrayList<StringData> CharacterList = new ArrayList();

    // Default constructor leaves StringDataList objects nicely set with properties 
    // indicating no database error and 0 elements in the list.
    public StringDataList() {
    }

    // Adds one StringData element to the array list of StringData elements
    public void add(StringData charData) {
        this.CharacterList.add(charData);
    }

    // Adds creates a StringData element from a ResultSet (from SQL select statement), 
    // then adds that new element to the array list of StringData elements.
    public void add(ResultSet results) {
        StringData sd = new StringData(results);
        this.CharacterList.add(sd);
    }
}