// js/projects-data.js
// Data Content
const projectData = {
    sonarqube: {
        title: "SonarQube Custom Java Rules",
        subtitle: "Building custom static analysis rules using SonarQube Plugin API",
        problem: "SonarQube provides a comprehensive set of built-in Java rules, but developers often need to understand how static analysis works internally or experiment with custom rules tailored to specific learning goals or project conventions. Without building custom rules, it is difficult to explore how code patterns are detected and how rule engines operate under the hood.",
        solution: "Developed a custom SonarQube plugin using the SonarQube Plugin API and Java AST to demonstrate how custom static analysis rules can be created, registered, and executed. The rules were packaged as a plugin, deployed to a SonarQube server, and activated through Quality Profiles so that detected issues appear both in the SonarQube Web UI and in the IDE via SonarLint.",
        tasks: [
            "Designed multiple custom Java rules using SonarQube Java AST with IssuableSubscriptionVisitor",
            "Implemented custom rule repository and rule metadata definition",
            "Packaged and deployed the custom SonarQube plugin as a JAR file",
            "Activated custom rules in Quality Profiles and bound them to analyzed projects",
            "Verified issue detection through Maven analysis and SonarLint IDE integration"
        ],
        tech: [
            "Java",
            "SonarQube Plugin API",
            "Java AST",
            "Static Code Analysis",
            "Maven"
        ],

        links: {
            github: "https://github.com/vinijf01/SonarQube-Custom-Java-Rules.git",
            docs: "https://github.com/vinijf01/SonarQube-Custom-Java-Rules#readme"
        },

        images: [
            {
                src: "images/projects/sonarqube/CustomJavaRules.jpg",
                title: "Custom Java rules registered in the SonarQube rule repository"
            },
            {
                src: "images/projects/sonarqube/CustomRuleDefinition.jpg",
                title: "Custom rule definition and metadata configuration"
            },
            {
                src: "images/projects/sonarqube/AnalysisIntellij.jpg",
                title: "Static code analysis issue detected in IntelliJ via SonarLint"
            },
            {
                src: "images/projects/sonarqube/ReportSonarqubeAnalysis.jpg",
                title: "Issues reported by custom rules in SonarQube analysis results"
            }
        ]
    },
    nifi_sap: {
        title: "Apache NiFi Custom Processor – SAP BAPI Integration (Simulated)",
        subtitle: "Enterprise-style system integration using Apache NiFi",
        problem: "In enterprise environments, SAP systems often need to be integrated with external applications. "
            + "However, direct access to real SAP systems is restricted due to security, NDA, and infrastructure constraints, "
            + "making it difficult to demonstrate integration skills in a portfolio context.",
        solution: "This project demonstrates an enterprise-style integration pattern using Apache NiFi and a custom Java processor. "
            + "A simulated SAP BAPI service is used to mimic real SAP responses, allowing realistic data orchestration, "
            + "error handling, and flow routing without relying on an actual SAP system.",

        tasks: [
            "Designed an Apache NiFi flow to simulate source-to-SAP integration",
            "Developed a custom NiFi processor in Java to invoke a SAP BAPI–like endpoint",
            "Implemented success and failure routing based on response and connectivity status",
            "Handled connection errors and exposed failures through NiFi Bulletin Board",
            "Structured the processor for future extensibility (e.g. SAP JCo or RFC-based integration)"
        ],
        tech: [
            "Apache NiFi",
            "Java",
            "Custom NiFi Processor",
            "Spring Boot",
            "SAP BAPI (Simulated)",
            "Docker"
        ],
        links: {
            github: "https://github.com/vinijf01/nifi-custom-processor-sap-simulator.git",
            docs: "https://github.com/vinijf01/nifi-custom-processor-sap-simulator#readme"
        },
        images: [
            { src: "images/projects/sap-nifi/NifiFlowOverview.png", title: "NiFi Flow Overview." },
            { src: "images/projects/sap-nifi/CustomProcessorConfiguration.png", title: "Custom NiFi Processor Configuration." },
            { src: "images/projects/sap-nifi/CustomProcessorDetails.png", title: "Custom NiFi Processor Details." },
            { src: "images/projects/sap-nifi/SuccessFlowExecution.png", title: "Successful Flow Execution." },
            { src: "images/projects/sap-nifi/ConnectionFailure.png", title: "NiFi Bulletin Board – SAP Endpoint Connection Failure." }
        ]
    },
    dss: {
        title: "Decision Support System for Study Program Selection",
        subtitle: "An academic decision support system using AHP and TOPSIS methods",
        problem: "Students often struggle to choose a suitable study program due to the complexity of evaluating multiple criteria and alternatives.",
        solution: "This project implements a decision support system that applies AHP (Analytic Hierarchy Process) and TOPSIS (Technique for Order Preference by Similarity to Ideal Solution) methods to assist students in selecting the most appropriate study program based on their preferences and criteria.",
        tasks: [
            "Implemented AHP and TOPSIS algorithms in Laravel",
            "Designed a user-friendly interface for inputting student preferences",
            "Developed database schema for storing student data and program information",
            "Integrated decision-making algorithms with the web interface"
        ],
        tech: [
            "Laravel",
            "MySQL",
            "AHP",
            "TOPSIS",
            "Decision Support System"
        ],
        links: {
            github: "https://github.com/vinijf01/spk-prodi",
            docs: "https://github.com/vinijf01/spk-prodi#readme"
        },
        images: [
            { src: "images/projects/dss/dashboard.png", title: "Admin Dashboard Overview" },
            { src: "images/projects/dss/data.png", title: "Student Profile Input" },
            { src: "images/projects/dss/questionnaire.png", title: "Questionnaire Input" },
            { src: "images/projects/dss/result.png", title: "Ranking and Recommendation Result" }
        ]
    }
};