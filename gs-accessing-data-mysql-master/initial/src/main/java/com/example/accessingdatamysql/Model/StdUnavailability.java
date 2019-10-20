package com.example.accessingdatamysql.Model;

import java.sql.Time;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.*;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class StdUnavailability {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	private Integer std_user_id;
   
	private Boolean std_not_class;
   
	@Size(max = 10)
	private String course_id;

	@Column(name ="std_start_time")
	private Time start;
	
	@Column(name ="std_end_time")
	private Time end;
	
	@Column(name ="std_day")
//	private String[] day;

	@ElementCollection
    private List<String> day = new ArrayList<String>();
	
	public List<String> getDay() {
		return day;
	}

	public void setDay(List<String> day) {
		this.day = day;
	}

	@Size(max = 15)
	@Column(name ="std_class_location")
	private String location;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getStd_user_id() {
		return std_user_id;
	}

	public void setStd_user_id(Integer std_user_id) {
		this.std_user_id = std_user_id;
	}

	public Boolean getStd_not_class() {
		return std_not_class;
	}

	public void setStd_is_class(Boolean std_not_class) {
		this.std_not_class = std_not_class;
	}

	
	public String getCourse_id() {
		return course_id;
	}

	public void setCourse_id(String course_id) {
		this.course_id = course_id;
	}

	public Date getStart() {
		return start;
	}

	public void setStart(Time start) {
		this.start = start;
	}

	public Date getEnd() {
		return end;
	}

	public void setEnd(Time end) {
		this.end = end;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}
	
//	public String getDay() {
//		return day;
//	}
//
//	public void setDay( String day) {
//		this.day = day;
//	}


	
}
