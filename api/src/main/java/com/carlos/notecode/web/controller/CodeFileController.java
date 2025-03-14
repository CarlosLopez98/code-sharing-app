package com.carlos.notecode.web.controller;

import com.carlos.notecode.domain.dto.CodeFileDTO;
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
    public ResponseEntity<Resource> getFile(@PathVariable String fileId) {
        try {
            Resource file = codeFileService.getFile(fileId);
            return ResponseEntity.ok()
                    .contentType(MediaType.APPLICATION_OCTET_STREAM)
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"")
                    .header(HttpHeaders.ACCESS_CONTROL_EXPOSE_HEADERS, "Content-Disposition")
                    .body(file);
        }catch (Exception e) {
            return ResponseEntity.status(404).body(null);
        }
    }

    @PostMapping
    public ResponseEntity<CodeFileDTO> uploadFile(@RequestParam("file") MultipartFile file) {
        try {
            CodeFileDTO savedFile = codeFileService.storeFile(file);
            return ResponseEntity.ok(savedFile);
        }catch (IOException e) {
            return ResponseEntity.status(500).body(null);
        }
    }
}
