package com.example.accessingdatamysql.Model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Size;

@Entity
public class LeaveRequest {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer LR_id;
	
	@Size(max = 10)
	private String std_user_id;

	@Column(name ="LR_start_time")
	private Date LR_start_time;
	
	@Column(name ="LR_end_time")
	private Date LR_end_time;

	@Size(max = 15)
	@Column(name ="DL_class_location")
	private String location;

	@Size(max = 10)
	private String class_toCover;
	
	private Boolean LR_isAccepted;
	
	
	public Integer getLR_id() {
		return LR_id;
	}

	public void setLR_id(Integer lR_id) {
		LR_id = lR_id;
	}

	
	public String getStd_user_id() {
		return std_user_id;
	}

	public void setStd_user_id(String std_user_id) {
		this.std_user_id = std_user_id;
	}
	
	public Date getLR_start_time() {
		return LR_start_time;
	}

	public void setLR_start_time(Date lR_start_time) {
		LR_start_time = lR_start_time;
	}

	public Date getLR_end_time() {
		return LR_end_time;
	}

	public void setLR_end_time(Date lR_end_time) {
		LR_end_time = lR_end_time;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getClass_toCover() {
		return class_toCover;
	}

	public void setClass_toCover(String class_toCover) {
		this.class_toCover = class_toCover;
	}

	public Boolean getLR_isAccepted() {
		return LR_isAccepted;
	}

	public void setLR_isAccepted(Boolean lR_isAccepted) {
		LR_isAccepted = lR_isAccepted;
	}

	
}
