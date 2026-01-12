# Lead Enricher - Complete Product Overview

## 🎯 What Is Lead Enricher?

**Lead Enricher is a FREE Google Sheets add-on** that transforms your spreadsheet into a powerful lead enrichment and research platform. It's positioned as a **cost-effective Clay.com alternative** with built-in AI agents and web scraping capabilities.

### The Core Value Proposition

**"Professional Lead Enrichment Platform - FREE Forever (Beta)"**

Unlike Clay or Apollo that charge $200-500/month with credit limits:
- ✅ **Platform is 100% FREE** (currently in beta)
- ✅ **Built-in FREE web scraping** (no Apify costs)
- ✅ **FREE Claygent-style research agent** (Google search + web scraping + AI analysis)
- ✅ **FREE multi-page website analysis**
- ✅ **You bring your own API keys** (OpenAI, Apollo, Hunter, etc.)
- ✅ **NO markup on API costs** (unlike Clay's credit system)
- ✅ **Works 100% inside Google Sheets** (no new platform to learn)

---

## 🏗️ How It Works

### Technical Architecture

**Hybrid Execution Model:**
```
Google Sheets → AppScript Backend → Cloudflare Workers → External APIs
                      ↓
                 (or direct processing in AppScript for quick tasks)
```

**Two Execution Paths:**

1. **Worker Tasks (Cloudflare Workers):**
   - AI agents, web scraping, external API calls
   - Cost-optimized with intelligent routing
   - Handles 50,000+ rows/day per user

2. **AppScript Tasks (Direct):**
   - LinkedIn scraping, bulk operations, data formatting
   - No external worker needed

### Key Technical Advantages

- **Background Processing**: Handles 50,000+ enrichments per day per user
- **Auto-Resume**: If execution hits time limits, automatically saves state and continues
- **Intelligent Rate Limiting**: Prevents API throttling
- **Batch Processing**: Optimizes API calls to reduce costs
- **State Management**: Polls status updates, no manual refresh needed

---

## 💎 What Makes Lead Enricher UNIQUE

### 1. FREE Core Features

**These are COMPLETELY FREE (no API costs):**

✅ **Multi-Page Website Scraping**
- Scrapes entire websites (not just one page like Clay)
- Intelligently selects relevant pages
- Example: "Research Agent" scrapes sitemap + multiple pages + AI analysis

✅ **Advanced Web Scraping**
- Extract text, emails, phone numbers, social links
- Sitemap crawler (recursive, follows all sitemaps)
- No Apify costs (direct scraping via Cloudflare Workers)

✅ **Claygent Alternative: "Research Agent"**
- Google search + website scraping + AI synthesis
- Find contact info, company research, competitive analysis
- Multi-step reasoning like Claygent but YOU control the AI model

✅ **Website Researcher**
- Analyzes multiple pages from a website
- Intelligently selects pages based on research focus
- Perfect for deep company analysis

### 2. Bring Your Own API Keys (BYOK)

**You pay APIs directly = no markup:**

Unlike Clay which charges $500/month for 50,000 credits with API markup:
- You buy OpenAI API key ($20-50/month typical usage)
- You buy Apollo.io key ($49/month)
- You buy Hunter.io key ($49/month)
- Lead Enricher orchestrates them for FREE

**Your total cost: ~$100-150/month vs Clay's $500/month**

### 3. Unlimited API Integration

**HTTP Request Task = Connect ANY API:**
- No waiting for Lead Enricher to build integrations
- Got an API endpoint? Use it in 2 minutes
- Dynamic URL building with {{Column Name}} syntax
- Rate limiting and retry logic built-in

**Example:** Connect to any CRM, any data provider, any webhook

---

## 🤖 Complete Feature List

### AI-Powered Features

#### 1. **Simple AI Agent** (FREE platform, you pay OpenAI/Anthropic/DeepSeek)
- **What it does**: Analyzes your data with AI prompts
- **Auto-scrapes URLs**: If column contains URL, AI visits and scrapes it automatically
- **Supported models**:
  - OpenAI: GPT-4o, GPT-4 Turbo, GPT-3.5 Turbo
  - Anthropic: Claude 3.5 Sonnet, Claude 3 Opus, Claude 3 Haiku
  - DeepSeek: DeepSeek Chat
- **Use cases**:
  - "Categorize {{Company Name}} into industry"
  - "Write cold email for {{Name}} at {{Company Name}}"
  - "Summarize this company: {{Website URL}}" (auto-scrapes)

#### 2. **Research Agent** (FREE platform, you pay AI + Serper.dev)
- **What it does**: Your Claygent alternative
- **How it works**: Google search → scrapes top results → AI synthesizes answer
- **Capabilities**:
  - Find contact emails and phone numbers
  - Company research and analysis
  - Competitive intelligence
  - Verify information across multiple sources
- **Pre-built templates**:
  - 📞 Find Company Phone Number
  - 💻 Find GitHub Profile
  - 📧 Find Contact Email
  - 🏢 Company Information Research

**API Keys Needed:**
- One of: OpenAI, Anthropic, or DeepSeek
- Serper.dev (Google search API - $5/1,000 searches)

#### 3. **Website Researcher** (FREE platform, you pay AI)
- **What it does**: Scrapes multiple pages from a website + AI analysis
- **How it works**:
  1. Gets sitemap from website
  2. Intelligently selects 5-10 most relevant pages
  3. Scrapes all selected pages
  4. Combines content and analyzes with AI
- **Research focuses**:
  - Company research (about, team, leadership)
  - Competitive analysis (products, pricing, features)
  - Sales prospecting (contact, news, team)
  - Investment research (funding, growth, financials)
  - Recruiting research (careers, culture, benefits)
- **Customizable**: Define your own analysis prompt

**API Keys Needed:** OpenAI or Anthropic

---

### Web Scraping Features (ALL FREE - no API costs)

#### 4. **Web Scraper**
- **What it does**: Scrapes single page from any URL
- **Extracts**:
  - Page title and description
  - Full text content
  - Phone numbers (auto-detected)
  - Email addresses (auto-detected)
  - Social media links
  - Meta keywords
- **No API key needed**: Runs on Cloudflare Workers

#### 5. **Sitemap Scraper**
- **What it does**: Extracts all URLs from XML sitemaps
- **Features**:
  - Recursive (follows sitemap indexes)
  - Filter by URL patterns
  - Exclude unwanted patterns
  - Max depth control
- **Use cases**:
  - Get all blog post URLs
  - Find all product pages
  - Discover website structure
- **No API key needed**

#### 6. **LinkedIn Company Scraper** (FREE)
- **What it does**: Scrapes LinkedIn company pages
- **Extracts**:
  - Company name and description
  - Industry
  - Website URL
  - Headquarters location
  - Employee count
  - Number of followers
  - All locations
- **Limitations**: Name-based URLs only (e.g., `/company/apple/`)
- **No API key needed**: Direct scraping
- **Rate limited**: 20/minute to avoid detection

---

### Data Enrichment Features (You Bring API Keys)

#### 7. **20+ Pre-Built Integrations**

**Email Finders:**
- Hunter.io Email Finder
- Prospeo Email Finder
- Datagma Work Email Finder
- LeadMagic Email Finder

**Email Verifiers:**
- Hunter.io Email Verifier
- Prospeo Email Verifier
- ZeroBounce Email Verifier
- MillionVerifier Email Verifier
- Advanced Email Pre-Verifier (FREE - no API)

**Phone/Mobile Finders:**
- Prospeo Mobile Finder
- Datagma Mobile Finder
- LeadMagic Mobile Finder

**Company Enrichment:**
- Datagma Company Enricher
- Datagma Person Enricher
- Datagma Employee Finder
- Hunter.io Combined Enricher

**LinkedIn Tools:**
- IcyPeas Profile URL Finder
- IcyPeas Profile Scraper
- IcyPeas Company URL Finder
- IcyPeas Company Scraper

#### 8. **HTTP Request** - Connect ANY API
- **What it does**: Call any external API with rate limiting
- **Features**:
  - GET, POST, PUT, DELETE, PATCH methods
  - Custom headers and query params
  - Request body templating
  - Response extraction
  - Rate limiting (prevents throttling)
  - Retry logic with exponential backoff
- **Dynamic variables**: Use {{Column Name}} for spreadsheet data
- **Example use cases**:
  - Custom CRM integration
  - Internal company APIs
  - Webhooks
  - Any public API not pre-integrated

---

### Apify Integration (Advanced Web Scraping)

#### 9. **Apify Actor Executor**
- **What it does**: Run any Apify actor from Google Sheets
- **Use cases**:
  - Yellow Pages scraping
  - Google Maps scraping
  - Facebook page scraping
  - Instagram scraping
  - E-commerce scraping
  - Any of 1,500+ Apify actors
- **Result modes**:
  - Single row (Facebook scraper, LinkedIn scraper)
  - Bulk import (Yellow Pages → creates new rows per result)
- **Requires**: Apify API key (pay Apify directly)

#### 10. **Apify Data Importer**
- **What it does**: Import existing Apify runs into Sheets
- **Features**:
  - Import all runs from an actor
  - Import specific run by ID
  - Max rows limit
  - Bulk import (creates new rows)
- **Use case**: Run actors manually on Apify, import results to Sheets

---

### Data Management Features

#### 11. **Remove Duplicates** (FREE - AppScript)
- **What it does**: Removes duplicate rows based on key columns
- **Features**:
  - Select multiple key columns
  - Keep first or last occurrence
  - Fast processing (runs in AppScript)

#### 12. **Text Processing Tasks** (planned/partial)
- Column operations
- Data transformations
- Text cleaning

---

## 📊 How Lead Enricher Compares to Competitors

### vs Clay.com

| Feature | Clay.com | Lead Enricher |
|---------|----------|---------------|
| **Monthly Cost** | $349-$800/mo | **FREE** (beta) |
| **Credit System** | Limited credits with API markup | **No credits - unlimited** |
| **AI Agents** | Claygent ($$$) | Research Agent (FREE platform, you pay AI directly) |
| **Web Scraping** | Via Apify (expensive) | **Built-in FREE scraping** |
| **Multi-Page Scraping** | Not available | **FREE Website Researcher** |
| **Platform** | Separate web app (learning curve) | **Google Sheets** (familiar) |
| **API Integrations** | Marketplace (limited) | **HTTP Request = ANY API** |
| **Bring Your Own Keys** | No | **Yes - no markup** |
| **Processing Speed** | Rate limited by credits | **50,000 rows/day** |

**Bottom Line:** Lead Enricher gives you Clay's capabilities for FREE. You only pay for the APIs you use directly (no markup).

### vs Apollo.io

| Feature | Apollo.io | Lead Enricher |
|---------|-----------|---------------|
| **Monthly Cost** | $49-$149/mo | **FREE** (beta) |
| **Contact Database** | Built-in (limited searches) | Bring your own (Apollo, Hunter, etc.) |
| **Web Scraping** | Not available | **FREE built-in** |
| **AI Research** | Not available | **FREE Research Agent** |
| **Workflow Automation** | Limited | **Unlimited custom workflows** |
| **Platform** | Web app + CRM | **Google Sheets** |
| **Data Ownership** | Apollo's data | **Your data, your keys** |

**Bottom Line:** Apollo is a database. Lead Enricher is a platform that connects you to ANY data source.

### vs Ciro.io

| Feature | Ciro.io | Lead Enricher |
|---------|---------|---------------|
| **Monthly Cost** | $50-300/mo | **FREE** (beta) |
| **Positioning** | AI Prospecting Co-pilot | Lead Enrichment Platform |
| **CRM Integration** | Native (Salesforce, HubSpot) | Via APIs or export to Sheets |
| **AI Capabilities** | AI prospecting workflows | **AI agents + research + scraping** |
| **Customization** | Pre-built workflows | **Fully customizable** |
| **Platform** | Web app | **Google Sheets** |

**Bottom Line:** Ciro is opinionated (sales workflows). Lead Enricher is a flexible platform for ANY enrichment task.

---

## 🎁 What's Included in FREE Plan

### Current Beta Pricing (ALL FREE)

**Environment Variable: `DISABLE_CREDITS: true`**

This means:
- ✅ Unlimited enrichments
- ✅ No credit limits
- ✅ No usage tracking
- ✅ All features available
- ✅ 50,000 rows/day processing capacity

### What You Pay For (External APIs)

Lead Enricher is FREE. You pay external providers directly:

**Typical Monthly Costs (if using all features):**
- OpenAI API: $20-50/month (for AI agents)
- Serper.dev: $5-20/month (for Google search in Research Agent)
- Hunter.io: $49/month (for email finding)
- Apollo.io: $49/month (for B2B data)
- Apify: $49/month (for advanced scraping)

**Total: ~$150-200/month vs Clay's $800/month**

**If you only use FREE features:**
- Web Scraping: $0
- Sitemap Scraper: $0
- LinkedIn Scraper: $0
- Email Pre-Verifier: $0
- **Total: $0/month**

---

## 🚀 Use Cases & Examples

### 1. **B2B Lead Generation**

**Scenario:** You have 1,000 company domains, need to enrich

**Workflow:**
1. **Website Researcher**: Analyze company websites (FREE scraping + your AI)
2. **Research Agent**: Find CEO name and email
3. **Hunter.io Email Finder**: Verify email deliverability
4. **Simple AI Agent**: Generate personalized cold email subject

**Cost:**
- Platform: FREE
- OpenAI: ~$10 for 1,000 analyses
- Serper.dev: $5 for Google searches
- Hunter.io: $49/month for email verification
- **Total: ~$64 for 1,000 qualified leads**

**Clay equivalent cost: $349/month + limited credits**

### 2. **Company Research for Investors**

**Scenario:** Research 100 startups for potential investment

**Workflow:**
1. **Sitemap Scraper**: Get all pages from company website
2. **Website Researcher**: Deep analysis (team, funding, products)
3. **Research Agent**: Find recent news and press mentions
4. **Simple AI Agent**: Summarize investment thesis

**Cost:**
- Platform: FREE
- Web scraping: FREE
- OpenAI: ~$5 for 100 analyses
- **Total: $5 for 100 deep company reports**

### 3. **Competitive Intelligence**

**Scenario:** Track 50 competitors' product changes

**Workflow:**
1. **Sitemap Scraper**: Monitor product page URLs
2. **Web Scraper**: Extract product descriptions weekly
3. **Simple AI Agent**: Detect changes and categorize
4. **HTTP Request**: Send alerts to Slack webhook

**Cost:**
- Everything is FREE (no API costs)
- **Total: $0/month**

### 4. **Recruiter Outreach**

**Scenario:** Find 500 software engineers to recruit

**Workflow:**
1. **Apify Actor**: Scrape LinkedIn search results (optional)
2. **IcyPeas Profile Scraper**: Get LinkedIn profile data
3. **Research Agent**: Find GitHub profiles
4. **Simple AI Agent**: Generate personalized messages

**Cost:**
- Platform: FREE
- IcyPeas: $29/month
- OpenAI: $10 for personalization
- **Total: ~$39/month vs Apollo's $149/month**

---

## 🎨 Target Customers

### Primary Audience

**1. Sales & Marketing Teams**
- Lead generation professionals
- SDRs and BDRs
- Marketing ops teams
- Growth hackers

**2. Small Businesses & Startups**
- Can't afford Clay ($800/month)
- Need professional enrichment on a budget
- Want flexibility to use own API keys

**3. Data Analysts & Researchers**
- Market research firms
- Investment analysts
- Competitive intelligence teams
- Academic researchers

**4. Agencies & Consultants**
- Digital marketing agencies
- Lead gen services
- Recruiting firms
- Business intelligence consultants

### Why They Choose Lead Enricher

**Pain Points We Solve:**
- ❌ "Clay is too expensive" → Lead Enricher is FREE
- ❌ "I run out of credits every month" → Unlimited enrichments
- ❌ "I need custom integrations" → HTTP Request for any API
- ❌ "Learning another platform takes time" → Works in Google Sheets
- ❌ "I want to control my AI costs" → Bring your own OpenAI key
- ❌ "Web scraping is expensive on Apify" → Built-in FREE scraping

---

## 💡 Unique Selling Points (USPs)

### 1. **FREE Forever Model (Beta)**
- Platform costs: $0
- You only pay APIs you use directly
- No markup, no credits, no limits

### 2. **Built-In FREE Scraping**
- Multi-page website scraping
- Sitemap crawling
- LinkedIn company scraping
- Email/phone extraction
- **Saves $50-200/month vs Apify**

### 3. **Claygent Alternative (FREE Platform)**
- Google search + web scraping + AI synthesis
- You control the AI model (use cheap DeepSeek or powerful GPT-4)
- No per-research markup like Clay

### 4. **Google Sheets Native**
- No new platform to learn
- Works with existing workflows
- Export to CSV anytime
- Share with team easily

### 5. **Infinite API Expandability**
- HTTP Request = connect ANY API in 2 minutes
- Don't wait for integrations
- Full control over rate limiting and retries

### 6. **Enterprise-Grade Performance**
- 50,000 rows/day per user
- Background processing with auto-resume
- Intelligent rate limiting
- Batch optimization

---

## 🔧 Technical Capabilities

### Processing Power

- **50,000 enrichments per day per user**
- **Background execution** (no need to keep browser open)
- **Auto-resume** (handles Google Apps Script time limits)
- **Parallel processing** (multiple tasks run simultaneously)
- **Sequential processing** (rate-limited tasks for APIs)
- **Batch processing** (optimize API calls)

### Execution Model

**Two execution paths:**

1. **Cloudflare Workers** (for heavy lifting):
   - AI agent processing
   - Web scraping
   - External API calls
   - HTTP requests
   - Apify integration

2. **Google Apps Script** (for quick tasks):
   - Duplicate removal
   - Data formatting
   - LinkedIn scraping (local)
   - Quick operations

### State Management

- **UserProperties**: Stores execution state
- **Progress tracking**: Frontend polls for updates
- **Batch processing**: 50 rows at a time
- **Resumable**: If execution stops, resumes from last batch

---

## 📈 Roadmap & Future Features

### Currently Available (Beta)
- ✅ All AI agents
- ✅ Web scraping suite
- ✅ 20+ pre-built integrations
- ✅ HTTP Request for custom APIs
- ✅ Apify integration
- ✅ Background processing

### Coming Soon
- 🔄 Waterfall enrichment (try multiple providers)
- 🔄 Conditional workflows (if/then logic)
- 🔄 Multi-sheet workflows
- 🔄 Scheduled executions
- 🔄 Webhook triggers
- 🔄 More text processing tasks

### Future Plans
- 📋 Chrome extension for one-click enrichment
- 📋 API access for programmatic use
- 📋 Zapier/Make.com integration
- 📋 Pre-built workflow templates
- 📋 Team collaboration features

---

## 🎯 Business Model

### Current: FREE Beta

**Why FREE?**
- Build user base
- Get feedback on features
- Prove value before monetization
- Compete with Clay/Apollo on cost

### Future Pricing (Planned)

**Freemium Model:**
- **Free Plan**: 1,000 enrichments/month
  - All built-in FREE features (scraping, AI agents)
  - Bring your own API keys
  - Community support

- **Pro Plan**: $25-49/month
  - Unlimited enrichments
  - Priority support
  - Advanced features (waterfall, workflows)
  - Team collaboration

- **Enterprise**: Custom pricing
  - White-label option
  - Dedicated support
  - Custom integrations
  - SLA guarantees

**Revenue Streams:**
1. Subscription fees (primary)
2. Optional managed API keys (convenience, not markup)
3. Enterprise custom development
4. White-label licensing

---

## 🔥 Competitive Advantages

### vs Clay.com

**Technical:**
- ✅ Better scraping (multi-page, free)
- ✅ More flexible (any API via HTTP Request)
- ✅ Faster (50K rows/day vs credit limits)

**Business:**
- ✅ FREE vs $349-800/month
- ✅ No credit system (unlimited)
- ✅ No API markup (use your keys)

**UX:**
- ❌ Less polished interface (Google Sheets sidebar)
- ✅ Familiar (everyone knows Sheets)
- ✅ Easier collaboration (just share Sheet)

### vs Apollo.io

**Technical:**
- ✅ More capabilities (AI, scraping, custom APIs)
- ✅ More flexible (not locked to Apollo data)

**Business:**
- ✅ FREE vs $49-149/month
- ✅ Unlimited usage vs search limits

**Data:**
- ❌ No built-in database (must bring own data sources)
- ✅ Full data ownership and control

---

## 📞 Support & Resources

### Documentation
- GitHub README
- In-app help text for each task
- API configuration examples

### Support Channels
- GitHub Issues (community support)
- Email support (for pro users in future)

### Community
- Future: Discord/Slack community
- Future: Video tutorials and guides

---

## 🎉 Summary: What You Get

**Lead Enricher is:**
- 🆓 A FREE Google Sheets add-on (beta)
- 🤖 With built-in AI agents (Claygent alternative)
- 🌐 Free multi-page web scraping
- 🔗 20+ pre-built API integrations
- ⚡ 50,000 enrichments/day capacity
- 🔧 Connect ANY API with HTTP Request
- 💰 No markup on your API costs
- 📊 Works 100% in Google Sheets

**Perfect for:**
- Sales teams who can't afford Clay
- Researchers who need custom workflows
- Startups on a tight budget
- Anyone who wants full control over their enrichment stack

**Bottom Line:**
You get Clay's power for FREE. You only pay the APIs you use (at cost, no markup). Stop overpaying for lead enrichment.

---

**Ready to get started? Install from Google Workspace Marketplace (coming soon)**

**Questions? Email: contact@leadenricher.com**

**GitHub: [github.com/kiril-gichevski/leadenrich](https://github.com/kiril-gichevski/leadenrich)**
