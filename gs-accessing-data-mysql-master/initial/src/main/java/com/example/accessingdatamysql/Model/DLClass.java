package com.example.accessingdatamysql.Model;

import java.sql.Time;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class DLClass {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer DL_id;
	
	@Size(max = 10)
	private String DL_course_id;
	
	@Column(name ="DL_start_time")
	private Time DL_start_time;
	
	@Column(name ="DL_end_time")
	private Time DL_end_time;
	 
	@Size(max = 10)
	@Column(name ="DL_class_day")
	private String day;

	@Size(max = 15)
	@Column(name ="DL_class_location")
	private String location;

	@Column(name ="assigned_user_id")
	private Integer std_user_id;

	private Boolean DL_isAssigned;

   
	public Integer getDL_id() {
		return DL_id;
	}

	public void setDL_id(Integer dL_id) {
		DL_id = dL_id;
	}

	public String getDL_course_id() {
		return DL_course_id;
	}

	public void setDL_course_id(String dL_course_id) {
		DL_course_id = dL_course_id;
	}

	public Time getDL_start_time() {
		return DL_start_time;
	}

	public void setDL_start_time(Time dL_start_time) {
		DL_start_time = dL_start_time;
	}

	public Time getDL_end_time() {
		return DL_end_time;
	}

	public void setDL_end_time(Time dL_end_time) {
		DL_end_time = dL_end_time;
	}

	public String getDay() {
		return day;
	}

	public void setDay(String day) {
		this.day = day;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public Integer getStd_user_id() {
		return std_user_id;
	}

	public void setStd_user_id(Integer std_user_id) {
		this.std_user_id = std_user_id;
	}

	public Boolean getDL_isAssigned() {
		return DL_isAssigned;
	}

	public void setDL_isAssigned(Boolean dL_isAssigned) {
		DL_isAssigned = dL_isAssigned;
	}

}
