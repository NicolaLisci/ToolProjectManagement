package com.sql.test.testSql.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sql.test.testSql.model.ModelEmployement;
import com.sql.test.testSql.model.ModelProject;
import com.sql.test.testSql.model.ModelResources;
import com.sql.test.testSql.resources.JpaEmployement;
import com.sql.test.testSql.resources.JpaProject;
import com.sql.test.testSql.resources.JpaResources;



@RestController
@RequestMapping(value = "/rest/resources")
public class ControllerRest{
	

	@Autowired
	JpaResources jpaResources;
	JpaProject jpaProject;
	JpaEmployement jpaEmplo;
	

	public ControllerRest(JpaResources jpaResources, JpaProject jpaProject, JpaEmployement jpaEmplo) {
		super();
		this.jpaResources = jpaResources;
		this.jpaProject = jpaProject;
		this.jpaEmplo = jpaEmplo;
	}

	//SHOW ALL RESOURCES
	@GetMapping(value = "/show")
	public List<ModelResources> viewAll(){
		return jpaResources.findAll();	
	}
	
	//SHOW ALL PROJECT
	@GetMapping(value = "/show/projects")
	public List<ModelProject> viewAllproject(){
		return jpaProject.findAll();	
	}
	
	//SHOW ALL EMPLOYEMENT
	@GetMapping(value = "/show/employement")
	public List<ModelEmployement> viewAllEmployements(){
		return jpaEmplo.findAll();
	}
	
	

	//POST ALL RESOURCES
	@PostMapping(value = "/load")
	public List<ModelResources> post (@RequestBody final ModelResources resources){
		jpaResources.save(resources);
		return jpaResources.findAll();
	}
	
	
	//POST ALL PROJECT
	@PostMapping(value = "/load/project")
	public List<ModelProject> post (@RequestBody final ModelProject project){
		jpaProject.save(project);
		return jpaProject.findAll();
	}
	
	//POST/UPDATE SINGLE EMPLOYEMENT
	@PostMapping(value = "/load/employement/all")
	public ResponseEntity<?> addEmployement(@RequestBody ModelEmployement emplo) {
		return new ResponseEntity<>(jpaEmplo.save(emplo), HttpStatus.CREATED);
	}
	
	//DELETE METHOD for RESOURCES
    @RequestMapping(value = "/delete/resources/{id}")
    public String deleteResource(@PathVariable Integer id) {
      jpaResources.delete(id);
      return "Resource with " + id + " deleted";
    }
	
	
	//DELETE ASSIGNMENT PROJECT BY ID
	@RequestMapping(value = "/delete/resources_assignment/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> deleteAssingnment(@PathVariable int id) {
		jpaEmplo.delete(id);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	//GET FOR RESOURCES by ID / TYPE / SURNAME
	//ID
	@GetMapping(value = "/show/resources/{id}")
	public ModelResources getId(@PathVariable final int id){
		return jpaResources.findAllById(id);
		
	}
	
	//TYPE
	@GetMapping(value = "/show/type/{type}")
	public List<ModelResources> tipologia(@PathVariable final String type){
		return jpaResources.findByType(type);
	}
	
	//SURNAME
	@GetMapping(value = "/show/surname/{surname}")
	public List<ModelResources> surname(@PathVariable String surname){
		return jpaResources.findBySurname(surname);
	}
	
	
	//GET PROJECT BY ID
	@GetMapping(value = "/show/projects/{id}")
	public ModelProject getIdProject(@PathVariable final int id){
		return jpaProject.findAllById(id);
		
	}
	
	//RESOURCES ID + PROJECT ID
	@GetMapping(value = "/show/resources/data/{id}")
	public String selectbyData (@PathVariable int id) {
		ModelProject modelProject = jpaProject.findAllById(id);
		ModelResources modelResources = jpaResources.findAllById(id);
		return modelResources.getHire() + " " + modelResources.getName() + " " + modelProject.getStart_project();
	}
	

	
	//DELETE METHOD for PROJECT
	@RequestMapping(value = "/delete/projects/{id}")
	public String delete(@PathVariable Integer id) {
		jpaProject.delete(id);
		return "Project with " + id + " deleted";
	}
	
	
	 public static Date setDataFromEdit(String data){
	        Date date = null;
	        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd/mm/yyyy",Locale.ITALY);
	        try {
	            date = simpleDateFormat.parse(data);
	        } catch (ParseException e) {
	            e.printStackTrace();
	        }

	        return date;
	    }
	
	

}
