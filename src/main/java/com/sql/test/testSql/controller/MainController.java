package com.sql.test.testSql.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
		@RequestMapping("/registrazione")
		public String welcome(Map<String, Object> model) {
			model.put("message", "ciao");
			return "registrazione";
		}
	
}
