package com.example.accessingdatamysql.Model;

import java.sql.Time;

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
	private Integer std_unavailability_id;
    @Column (name="std_user_id")
	private Integer std_user_id;
	private Boolean std_is_class;
	@Size(max = 10)
	private String std_course_id;
	private Time std_start_time;
	private Time std_end_time;
	@Size(max = 15)
	private String std_class_location;
	
	
	public Integer getStd_unavailability_id() {
		return std_unavailability_id;
	}
	public void setStd_unavailability_id(Integer std_unavailability_id) {
		this.std_unavailability_id = std_unavailability_id;
	}
	public Integer getStd_user_id() {
		return std_user_id;
	}
	public void setStd_user_id(Integer std_user_id) {
		this.std_user_id = std_user_id;
	}
	public Boolean getStd_is_class() {
		return std_is_class;
	}
	public void setStd_is_class(Boolean std_is_class) {
		this.std_is_class = std_is_class;
	}
	public String getStd_course_id() {
		return std_course_id;
	}
	public void setStd_course_id(String std_course_id) {
		this.std_course_id = std_course_id;
	}
	public Time getStd_start_time() {
		return std_start_time;
	}
	public void setStd_start_time(Time std_start_time) {
		this.std_start_time = std_start_time;
	}
	public Time getStd_end_time() {
		return std_end_time;
	}
	public void setStd_end_time(Time std_end_time) {
		this.std_end_time = std_end_time;
	}
	public String getStd_class_location() {
		return std_class_location;
	}
	public void setStd_class_location(String std_class_location) {
		this.std_class_location = std_class_location;
	}


}
