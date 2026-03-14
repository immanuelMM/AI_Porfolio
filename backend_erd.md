# Portfolio Backend ERD

This document outlines the Entity Relationship Diagram (ERD) for a modernized backend implementation of this portfolio.

```mermaid
erDiagram
    PROFILE ||--o{ SKILL_CATEGORY : "organizes"
    PROFILE ||--o{ LANGUAGE : "speaks"
    PROFILE ||--o{ EXPERIENCE : "worked at"
    PROFILE ||--o{ EDUCATION : "studied at"
    PROFILE ||--o{ PROJECT : "developed"
    PROFILE ||--o{ CERTIFICATION : "earned"
    PROFILE ||--o{ AI_SKILL : "practices"
    PROFILE ||--o{ AI_TOOL : "highlights"

    SKILL_CATEGORY ||--o{ SKILL : "contains"
    EXPERIENCE ||--o{ EXPERIENCE_BULLET : "detailed by"
    PROJECT ||--o{ PROJECT_TAG : "classified by"
    PROJECT ||--o{ PROJECT_LINK : "references"
    AI_TOOL ||--o{ AI_TOOL_TAG : "classified by"

    PROFILE {
        int id PK
        string full_name
        string job_title
        string availability
        string email
        string phone
        string location
        string bio_summary
        string github_url
        string linkedin_url
        string twitter_url
        boolean use_profile_pic
    }

    EXPERIENCE {
        int id PK
        int profile_id FK
        string role
        string company
        string period_start
        string period_end
        boolean is_current
    }

    EXPERIENCE_BULLET {
        int id PK
        int experience_id FK
        text content
        int sort_order
    }

    EDUCATION {
        int id PK
        int profile_id FK
        string degree_role
        string institution
        string period
    }

    SKILL_CATEGORY {
        int id PK
        int profile_id FK
        string name
        int sort_order
    }

    SKILL {
        int id PK
        int category_id FK
        string name
    }

    PROJECT {
        int id PK
        int profile_id FK
        string title
        text description
        enum type "web_system | static | ai"
        int sort_order
    }

    PROJECT_TAG {
        int id PK
        int project_id FK
        string name
    }

    PROJECT_LINK {
        int id PK
        int project_id FK
        string label
        string url
    }

    LANGUAGE {
        int id PK
        int profile_id FK
        string name
        string proficiency_level
    }

    CERTIFICATION {
        int id PK
        int profile_id FK
        string name
        string issuer
        string year
        string icon_emoji
    }

    AI_SKILL {
        int id PK
        int profile_id FK
        string name
    }

    AI_TOOL {
        int id PK
        int profile_id FK
        string title
        string icon_emoji
        string badge_label
        text description
        string workflow_link
    }

    AI_TOOL_TAG {
        int id PK
        int ai_tool_id FK
        string name
    }
```

## MySQL Schema

You can use the following SQL script to initialize your database. This script includes all the tables and initial data based on your current portfolio.

```sql
-- Portfolio MySQL Schema and Initial Data
CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

-- [Tables: profiles, skill_categories, skills, experience, education, projects, languages, certifications, ai_skills, ai_tools]
-- See portfolio_schema.sql for the full script with INSERT statements.
```

> [!TIP]
> I have also created a standalone file [portfolio_schema.sql](file:///c:/Users/merin/.gemini/antigravity/scratch/Portfolio/portfolio_schema.sql) which contains the complete executable script including all your current data!

