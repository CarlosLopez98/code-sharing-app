package com.carlos.notecode.web.controller;

import com.carlos.notecode.domain.service.CodeFileService;
import com.carlos.notecode.persistence.entity.CodeFile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/files")
public class CodeFileController {
    @Autowired
    private CodeFileService codeFileService;

    @GetMapping("/{fileId}")
    public ResponseEntity<byte[]> getFile(@PathVariable String fileId) {
        try {
            byte[] fileData = codeFileService.getFile(fileId);
            return ResponseEntity.ok()
                    .contentType(MediaType.APPLICATION_OCTET_STREAM)
                    .header(HttpHeaders.CONTENT_DISPOSITION, "inline")
                    .body(fileData);
        }catch (Exception e) {
            return ResponseEntity.status(404).body(null);
        }
    }

    @PostMapping
    public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file) {
        try {
            CodeFile savedFile = codeFileService.storeFile(file);
            return ResponseEntity.ok(savedFile);
        }catch (IOException e) {
            return ResponseEntity.status(500).body("Error while uploading the file");
        }
    }
}
