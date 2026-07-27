package com.globalco.jobboard.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.globalco.jobboard.model.Job;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class JobControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void healthCheckReturnsUp() throws Exception {
        mockMvc.perform(get("/api/health"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("UP"));
    }

    @Test
    void getAllJobsReturnsSeededJobs() throws Exception {
        mockMvc.perform(get("/api/jobs"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()").value(org.hamcrest.Matchers.greaterThanOrEqualTo(3)));
    }

    @Test
    void createAndFetchJob() throws Exception {
        Job job = new Job("QA Engineer", "TestCo", "Chennai, India",
                "Manual and automation testing role.", "FULL_TIME", 300000.0, 450000.0,
                "https://example.com/apply/qa");

        String response = mockMvc.perform(post("/api/jobs")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(job)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.title").value("QA Engineer"))
                .andReturn().getResponse().getContentAsString();

        Job created = objectMapper.readValue(response, Job.class);

        mockMvc.perform(get("/api/jobs/" + created.getId()))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.company").value("TestCo"));
    }

    @Test
    void searchByKeywordFiltersResults() throws Exception {
        mockMvc.perform(get("/api/jobs").param("keyword", "Java"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].title").exists());
    }

    @Test
    void getMissingJobReturns404() throws Exception {
        mockMvc.perform(get("/api/jobs/999999"))
                .andExpect(status().isNotFound());
    }
}
