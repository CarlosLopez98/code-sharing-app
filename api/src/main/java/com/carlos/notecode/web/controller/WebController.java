package com.carlos.notecode.web.controller;

import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.nio.file.Files;

@RestController
@RequestMapping("/")
public class WebController {

    @GetMapping({"/", "/{path:^(?!api).*$}"})
    public byte[] index() throws IOException {
        return Files.readAllBytes(new ClassPathResource("static/index.html").getFile().toPath());
    }
}
