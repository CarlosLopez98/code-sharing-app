package com.carlos.notecode.domain.service;

import com.carlos.notecode.domain.dto.CodeFileDTO;
import com.carlos.notecode.domain.repository.CodeFileRepository;
import com.carlos.notecode.persistence.entity.CodeFile;
import com.carlos.notecode.persistence.mapper.CodeFileMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;

@Service
public class CodeFileService {
    @Value("${upload.directory}")
    private String uploadDir;
    @Autowired
    private CodeFileRepository codeFileRepository;

    public Resource getFile(String id) throws MalformedURLException {
        Optional<CodeFile> fileRecord = codeFileRepository.getByCodeFileId(id);

        if(fileRecord.isEmpty()) {
            throw new RuntimeException("File not found");
        }

        Path filePath = Paths.get(fileRecord.get().getFilePath());
        return new UrlResource(filePath.toUri());
    }

    public CodeFileDTO storeFile(MultipartFile file) throws IOException {
        String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
        Path directoryPath = Paths.get(uploadDir);
        String filePath = Paths.get(uploadDir, fileName).toString();

        if (!Files.exists(directoryPath)) {
            Files.createDirectories(directoryPath);
        }

        // Save the file in the file system
        File destinationFile = new File(filePath);
        file.transferTo(destinationFile);

        // Save info in database
        CodeFile uploadedFile = CodeFile.builder()
                .filename(fileName)
                .filePath(filePath)
                .build();
        return CodeFileMapper.toDto(codeFileRepository.create(uploadedFile));
    }
}
