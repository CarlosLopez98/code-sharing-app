package com.carlos.notecode.web.controller;

import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.nio.file.Files;

@RestController
@RequestMapping("/")
public class WebController {

    @GetMapping({"/", "/{path:^(?!api).*$}"})
    public ResponseEntity<byte[]> index() throws IOException {
        ClassPathResource resource = new ClassPathResource("static/index.html");
        byte[] content = StreamUtils.copyToByteArray(resource.getInputStream());

        return ResponseEntity.ok()
                .contentType(MediaType.TEXT_HTML)
                .body(content);
    }
}
