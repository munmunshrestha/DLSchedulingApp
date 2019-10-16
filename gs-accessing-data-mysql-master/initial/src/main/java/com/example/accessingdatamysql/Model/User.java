package com.example.accessingdatamysql.Model;

import java.util.List;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


@Entity // This tells Hibernate to make a table out of this class
public class User {
    @Id
    @NotNull
    @Column (name="id")
    private Integer id;
    private String name;
    @Size(max = 25)
    private String email;
    @Size(max = 10)
    private String password;
    private Boolean isAdmin;
    
    @OneToMany
    @JoinColumn (name="std_user_id", referencedColumnName ="id")
    private List<StdUnavailability> std_unavailability;

	public List<StdUnavailability> getStd_unavailability() {
		return std_unavailability;
	}

	public void setStd_unavailability(List<StdUnavailability> std_unavailability) {
		this.std_unavailability = std_unavailability;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	public Boolean getIsAdmin() {
		return isAdmin;
	}

	public void setIsAdmin(Boolean isAdmin) {
		this.isAdmin = isAdmin;
	}
}
