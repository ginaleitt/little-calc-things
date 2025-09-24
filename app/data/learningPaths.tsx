

export const learningPaths = {
  webdevelopment: [
    { skill: "HTML/CSS", projects: ["Build a personal portfolio website", "Create a restaurant landing page", "Design a product showcase page"] },
    { skill: "JavaScript", projects: ["Build a interactive calculator", "Create a weather app with API", "Build a memory card game"] },
    { skill: "React", projects: ["Create a todo list app", "Build a movie search database", "Design a personal dashboard"] },
    { skill: "Node.js", projects: ["Build a REST API for a blog", "Create a chat application", "Build a file upload service"] },
    { skill: "Next.js", projects: ["Build a full-stack blog platform", "Create an e-commerce store", "Build a portfolio with CMS"] },
    { skill: "Vue.js", projects: ["Create a expense tracker app", "Build a recipe finder", "Design a task management tool"] },
    { skill: "TypeScript", projects: ["Convert a JavaScript project to TypeScript", "Build a type-safe API client", "Create a strongly-typed form builder"] },
    { skill: "Tailwind CSS", projects: ["Redesign an existing website", "Create a component library", "Build responsive email templates"] },
    { skill: "GraphQL", projects: ["Build a book library API", "Create a social media feed", "Design a product catalog system"] },
    { skill: "Express.js", projects: ["Build a user authentication system", "Create a RESTful blog API", "Build a real-time notification service"] },
    { skill: "MongoDB", projects: ["Design a user profile database", "Create a inventory management system", "Build a content management database"] },
    { skill: "PostgreSQL", projects: ["Build a financial tracking database", "Create a customer relationship system", "Design an analytics dashboard backend"] },
    { skill: "Docker", projects: ["Containerize a web application", "Create a multi-service development environment", "Build a deployment pipeline"] },
    { skill: "AWS", projects: ["Deploy a static website to S3", "Build a serverless function", "Create a scalable web application"] },
    { skill: "Git/GitHub", projects: ["Contribute to an open source project", "Set up automated testing workflows", "Create a collaborative coding project"] }
  ],

  datascience: [
    { skill: "Python", projects: ["Analyze Netflix viewing patterns", "Predict house prices using regression", "Build a customer churn prediction model"] },
    { skill: "R", projects: ["Create statistical reports on survey data", "Build interactive data visualizations", "Perform A/B test analysis"] },
    { skill: "SQL", projects: ["Analyze e-commerce sales data", "Build a customer segmentation query", "Create automated reporting dashboards"] },
    { skill: "Pandas", projects: ["Clean and analyze messy CSV datasets", "Merge multiple data sources", "Create time series analysis reports"] },
    { skill: "NumPy", projects: ["Build mathematical models for finance", "Create scientific computing simulations", "Analyze sensor data patterns"] },
    { skill: "Matplotlib", projects: ["Create publication-quality research charts", "Build an automated reporting system", "Visualize geographic data patterns"] },
    { skill: "Seaborn", projects: ["Create statistical visualization dashboards", "Analyze correlation patterns in data", "Build exploratory data analysis reports"] },
    { skill: "Scikit-learn", projects: ["Build a movie recommendation system", "Create a spam email classifier", "Predict customer lifetime value"] },
    { skill: "Tableau", projects: ["Create executive sales dashboards", "Build interactive geographic visualizations", "Design customer behavior analytics"] },
    { skill: "Power BI", projects: ["Build financial performance dashboards", "Create HR analytics reports", "Design marketing campaign analysis"] },
    { skill: "Jupyter Notebooks", projects: ["Create reproducible research analysis", "Build interactive data exploration tools", "Design educational data tutorials"] },
    { skill: "TensorFlow", projects: ["Build an image classification model", "Create a natural language processing tool", "Design a time series forecasting model"] },
    { skill: "Apache Spark", projects: ["Process large-scale web logs", "Build real-time streaming analytics", "Create distributed data processing pipelines"] },
    { skill: "Excel Advanced", projects: ["Build dynamic financial models", "Create automated reporting templates", "Design interactive data analysis tools"] }
  ],

  cybersecurity: [
    { skill: "Ethical Hacking", projects: ["Set up a home penetration testing lab", "Conduct vulnerability assessment on test systems", "Create security audit reports"] },
    { skill: "Network Security", projects: ["Configure firewall rules for small business", "Set up intrusion detection system", "Design network segmentation strategy"] },
    { skill: "Penetration Testing", projects: ["Test web application security", "Conduct wireless network assessment", "Perform social engineering simulation"] },
    { skill: "Incident Response", projects: ["Create incident response playbook", "Simulate malware outbreak response", "Build security monitoring dashboard"] },
    { skill: "Cryptography", projects: ["Build encrypted messaging application", "Create digital signature system", "Design secure password manager"] },
    { skill: "Security Auditing", projects: ["Audit open source software security", "Create compliance assessment framework", "Build security risk assessment tool"] },
    { skill: "Malware Analysis", projects: ["Analyze suspicious files in sandbox", "Create malware detection signatures", "Build threat intelligence reports"] },
    { skill: "Digital Forensics", projects: ["Investigate simulated data breach", "Recover deleted files for analysis", "Create forensic investigation toolkit"] },
    { skill: "Cloud Security", projects: ["Secure AWS infrastructure setup", "Build cloud security monitoring", "Create cloud compliance assessment"] },
    { skill: "Web Application Security", projects: ["Test for OWASP Top 10 vulnerabilities", "Build secure login system", "Create web security scanner"] },
    { skill: "Risk Management", projects: ["Conduct organizational risk assessment", "Create business continuity plan", "Build risk monitoring dashboard"] },
    { skill: "Compliance (SOC/ISO)", projects: ["Prepare for SOC 2 audit", "Create ISO 27001 documentation", "Build compliance tracking system"] },
    { skill: "Security Awareness", projects: ["Design phishing simulation program", "Create security training materials", "Build security culture assessment"] }
  ],

  digitalart: [
    { skill: "Photoshop", projects: ["Create movie poster design", "Design album cover artwork", "Build photo manipulation portfolio"] },
    { skill: "Illustrator", projects: ["Design logo and brand identity", "Create vector illustration series", "Build icon set collection"] },
    { skill: "Procreate", projects: ["Create digital painting portfolio", "Design character illustrations", "Build animation short story"] },
    { skill: "Figma", projects: ["Design mobile app interface", "Create design system library", "Build website prototype"] },
    { skill: "Adobe XD", projects: ["Design user experience flow", "Create interactive prototype", "Build design handoff documentation"] },
    { skill: "Sketch", projects: ["Design e-commerce interface", "Create wireframe templates", "Build design collaboration workflow"] },
    { skill: "InDesign", projects: ["Design magazine layout", "Create brand style guide", "Build print marketing materials"] },
    { skill: "After Effects", projects: ["Create motion graphics logo", "Build animated explainer video", "Design kinetic typography piece"] },
    { skill: "Cinema 4D", projects: ["Create 3D product visualization", "Build animated abstract art", "Design motion graphics sequence"] },
    { skill: "Canva Pro", projects: ["Create social media template library", "Design presentation template series", "Build brand marketing kit"] },
    { skill: "Digital Painting", projects: ["Create fantasy landscape series", "Design character concept art", "Build speed painting collection"] },
    { skill: "Photo Retouching", projects: ["Build portrait retouching portfolio", "Create product photography edits", "Design composite photo artworks"] },
    { skill: "UI/UX Design", projects: ["Redesign existing app interface", "Create user research study", "Build accessibility-focused design"] },
    { skill: "Typography", projects: ["Design custom font family", "Create typographic poster series", "Build lettering logo collection"] }
  ],

  traditionalart: [
    { skill: "Oil Painting", projects: ["Paint landscape plein air series", "Create portrait painting study", "Build still life composition collection"] },
    { skill: "Watercolor", projects: ["Create botanical illustration series", "Paint architectural sketches", "Build travel journal artwork"] },
    { skill: "Acrylic Painting", projects: ["Create abstract expressionist pieces", "Paint large-scale canvas works", "Build mixed media art series"] },
    { skill: "Pencil Drawing", projects: ["Create realistic portrait studies", "Build architectural drawing portfolio", "Design comic book character sketches"] },
    { skill: "Charcoal Drawing", projects: ["Create dramatic figure studies", "Build landscape drawing series", "Design expressive portrait collection"] },
    { skill: "Ink Drawing", projects: ["Create detailed botanical illustrations", "Build pen and ink cityscape series", "Design tattoo artwork portfolio"] },
    { skill: "Pastels", projects: ["Create soft landscape paintings", "Build portrait pastel studies", "Design animal artwork series"] },
    { skill: "Figure Drawing", projects: ["Build life drawing portfolio", "Create gesture drawing studies", "Design anatomy reference sheets"] },
    { skill: "Sculpture (Clay)", projects: ["Create portrait sculpture series", "Build abstract form studies", "Design functional pottery pieces"] },
    { skill: "Printmaking", projects: ["Create linocut print series", "Build etching portfolio", "Design screen print artwork"] },
    { skill: "Mixed Media", projects: ["Create collage artwork series", "Build texture experimentation pieces", "Design found object sculptures"] },
    { skill: "Color Theory", projects: ["Create color harmony studies", "Build temperature painting series", "Design color interaction experiments"] },
    { skill: "Composition", projects: ["Create rule of thirds studies", "Build dynamic composition exercises", "Design visual balance experiments"] }
  ],

  photography: [
    { skill: "Portrait Photography", projects: ["Build family portrait portfolio", "Create professional headshot series", "Design environmental portrait collection"] },
    { skill: "Landscape Photography", projects: ["Create golden hour photo series", "Build seasonal landscape collection", "Design long exposure water studies"] },
    { skill: "Street Photography", projects: ["Document daily city life", "Create candid moment collection", "Build urban culture photo essay"] },
    { skill: "Product Photography", projects: ["Create e-commerce product shots", "Build food photography portfolio", "Design lifestyle product scenes"] },
    { skill: "Wedding Photography", projects: ["Assist wedding photographer", "Create engagement session portfolio", "Build bridal portrait collection"] },
    { skill: "Nature Photography", projects: ["Create wildlife behavior series", "Build macro flower photography", "Design bird photography collection"] },
    { skill: "Event Photography", projects: ["Document local community events", "Create corporate event portfolio", "Build concert photography series"] },
    { skill: "Lightroom Editing", projects: ["Create photo editing presets", "Build before/after portfolio", "Design batch processing workflow"] },
    { skill: "Photoshop Editing", projects: ["Create composite photo artworks", "Build photo restoration portfolio", "Design creative manipulation series"] },
    { skill: "Studio Lighting", projects: ["Create dramatic portrait lighting", "Build product lighting setups", "Design creative light painting"] },
    { skill: "Mobile Photography", projects: ["Create smartphone photography series", "Build Instagram-worthy collection", "Design mobile editing workflow"] },
    { skill: "Film Photography", projects: ["Shoot with vintage film cameras", "Create darkroom print portfolio", "Build analog photography series"] },
    { skill: "Drone Photography", projects: ["Create aerial landscape series", "Build architectural drone portfolio", "Design cinematic aerial shots"] }
  ],

  videoediting: [
    { skill: "Premiere Pro", projects: ["Edit travel documentary", "Create music video", "Build corporate promotional video"] },
    { skill: "After Effects", projects: ["Create animated logo reveal", "Build motion graphics explainer", "Design visual effects sequence"] },
    { skill: "Final Cut Pro", projects: ["Edit narrative short film", "Create social media content", "Build event highlight reel"] },
    { skill: "DaVinci Resolve", projects: ["Color grade short film", "Create cinematic look development", "Build audio post-production workflow"] },
    { skill: "Avid Media Composer", projects: ["Edit documentary feature", "Create multi-camera event edit", "Build professional workflow system"] },
    { skill: "Motion Graphics", projects: ["Create animated infographic video", "Build title sequence design", "Design kinetic typography piece"] },
    { skill: "Color Grading", projects: ["Create cinematic color palettes", "Build before/after grading reel", "Design mood-based color schemes"] },
    { skill: "Audio Editing", projects: ["Edit podcast episode", "Create music mixing project", "Build sound design portfolio"] },
    { skill: "Green Screen/VFX", projects: ["Create fantasy scene composite", "Build virtual background series", "Design impossible camera moves"] },
    { skill: "YouTube Content Creation", projects: ["Create educational video series", "Build vlog editing style", "Design thumbnail and graphics package"] },
    { skill: "Live Streaming", projects: ["Set up multi-camera live stream", "Create interactive streaming show", "Build remote collaboration setup"] },
    { skill: "360/VR Video", projects: ["Create virtual reality experience", "Build 360-degree travel video", "Design immersive storytelling piece"] },
    { skill: "Animation", projects: ["Create 2D character animation", "Build stop-motion short film", "Design animated logo sequences"] }
  ],

  threedmodeling: [
    { skill: "Blender", projects: ["Create photorealistic product render", "Build animated short film", "Design architectural visualization"] },
    { skill: "Maya", projects: ["Create character rigging system", "Build complex animation project", "Design particle effects simulation"] },
    { skill: "3ds Max", projects: ["Create interior design visualization", "Build game asset collection", "Design mechanical animation"] },
    { skill: "ZBrush", projects: ["Create detailed character sculpture", "Build organic form studies", "Design digital collectible figures"] },
    { skill: "Cinema 4D", projects: ["Create motion graphics animation", "Build product visualization", "Design abstract art renders"] },
    { skill: "SketchUp", projects: ["Design house architectural model", "Create furniture design portfolio", "Build landscape design visualization"] },
    { skill: "KeyShot", projects: ["Create product photography renders", "Build material study library", "Design lighting setup collection"] },
    { skill: "Substance Painter", projects: ["Create game-ready asset textures", "Build material library collection", "Design weathering and aging effects"] },
    { skill: "Houdini", projects: ["Create procedural city generation", "Build particle simulation system", "Design technical animation rigs"] },
    { skill: "Fusion 360", projects: ["Design mechanical parts for 3D printing", "Create product design prototype", "Build technical drawing portfolio"] },
    { skill: "Unity 3D", projects: ["Create interactive 3D experience", "Build simple game prototype", "Design architectural walkthrough"] },
    { skill: "Unreal Engine", projects: ["Create photorealistic environment", "Build interactive visualization", "Design real-time rendering showcase"] },
    { skill: "3D Printing Design", projects: ["Create functional household objects", "Build artistic sculpture series", "Design custom miniature figures"] }
  ],

  textilecrafts: [
    { skill: "Crochet", projects: ["Create amigurumi character collection", "Build cozy blanket series", "Design wearable accessory line"] },
    { skill: "Knitting", projects: ["Knit cable pattern sweater", "Create colorwork hat collection", "Build sock knitting portfolio"] },
    { skill: "Embroidery", projects: ["Create botanical hoop art series", "Build portrait embroidery collection", "Design decorative pillow covers"] },
    { skill: "Cross Stitch", projects: ["Create pixel art cross stitch", "Build sampler design collection", "Design custom pattern library"] },
    { skill: "Quilting", projects: ["Create memory quilt project", "Build geometric pattern collection", "Design modern art quilt series"] },
    { skill: "Sewing", projects: ["Create capsule wardrobe collection", "Build home decor sewing projects", "Design costume construction portfolio"] },
    { skill: "Macrame", projects: ["Create plant hanger collection", "Build wall hanging art series", "Design functional macrame pieces"] },
    { skill: "Weaving", projects: ["Create tapestry art collection", "Build functional textile pieces", "Design experimental weaving techniques"] },
    { skill: "Felting", projects: ["Create needle felted sculpture series", "Build wet felted accessory collection", "Design felted home decor items"] },
    { skill: "Dyeing", projects: ["Create natural dye color palette", "Build tie-dye technique collection", "Design ombre fabric series"] },
    { skill: "Pattern Making", projects: ["Create custom clothing patterns", "Build alterations technique guide", "Design fitting system documentation"] },
    { skill: "Fabric Printing", projects: ["Create screen printed fabric designs", "Build block printing collection", "Design digital fabric patterns"] }
  ],

  woodworking: [
    { skill: "Hand Tools", projects: ["Build traditional dovetail box", "Create hand-carved wooden spoon set", "Design mortise and tenon joint furniture"] },
    { skill: "Power Tools", projects: ["Build kitchen cabinet set", "Create workshop storage system", "Design precision cutting jig collection"] },
    { skill: "Furniture Making", projects: ["Build dining room table", "Create bedroom furniture set", "Design modular shelving system"] },
    { skill: "Wood Carving", projects: ["Create decorative relief panels", "Build sculptural art pieces", "Design functional carved kitchenware"] },
    { skill: "Turning", projects: ["Create wooden bowl collection", "Build decorative vase series", "Design custom pen and pencil sets"] },
    { skill: "Joinery", projects: ["Master traditional Japanese joints", "Create complex furniture connections", "Build joint technique sample board"] },
    { skill: "Finishing", projects: ["Create wood staining sample library", "Build finishing technique comparison", "Design natural finish experiments"] },
    { skill: "Restoration", projects: ["Restore antique furniture piece", "Repair damaged wooden items", "Create refinishing portfolio"] },
    { skill: "Woodburning", projects: ["Create decorative art pieces", "Build personalized gift collection", "Design pyrography pattern library"] },
    { skill: "Scroll Saw", projects: ["Create intricate fretwork designs", "Build wooden puzzle collection", "Design decorative ornament series"] },
    { skill: "Wood Selection", projects: ["Create wood species identification guide", "Build grain pattern study collection", "Design wood matching projects"] },
    { skill: "Workshop Setup", projects: ["Design efficient workshop layout", "Build custom tool storage solutions", "Create dust collection system"] }
  ],

  marketing: [
    { skill: "Social Media Marketing", projects: ["Grow Instagram account to 10K followers", "Create viral TikTok campaign", "Build LinkedIn thought leadership presence"] },
    { skill: "Google Ads", projects: ["Launch profitable search campaign", "Create display advertising funnel", "Build YouTube advertising strategy"] },
    { skill: "Facebook Ads", projects: ["Create lead generation campaign", "Build e-commerce sales funnel", "Design retargeting ad sequence"] },
    { skill: "Content Marketing", projects: ["Create blog that ranks on Google", "Build email newsletter with 1K subscribers", "Design content calendar system"] },
    { skill: "SEO", projects: ["Rank website for competitive keywords", "Build local business SEO strategy", "Create technical SEO audit system"] },
    { skill: "Email Marketing", projects: ["Create automated welcome sequence", "Build product launch email campaign", "Design customer retention program"] },
    { skill: "Analytics", projects: ["Build Google Analytics dashboard", "Create conversion tracking system", "Design A/B testing framework"] },
    { skill: "Copywriting", projects: ["Write high-converting sales pages", "Create email sequence that sells", "Build ad copy testing system"] },
    { skill: "Influencer Marketing", projects: ["Launch micro-influencer campaign", "Build influencer outreach system", "Create partnership tracking dashboard"] },
    { skill: "Marketing Automation", projects: ["Build customer journey automation", "Create lead scoring system", "Design behavioral trigger campaigns"] },
    { skill: "Brand Strategy", projects: ["Create complete brand identity", "Build brand positioning strategy", "Design brand voice guidelines"] },
    { skill: "Conversion Optimization", projects: ["Improve website conversion rate", "Build landing page testing system", "Create user experience optimization plan"] },
    { skill: "Video Marketing", projects: ["Create viral video campaign", "Build video sales funnel", "Design video content strategy"] },
    { skill: "Affiliate Marketing", projects: ["Launch affiliate program", "Build affiliate recruitment system", "Create performance tracking dashboard"] }
  ],

  instruments: [
    { skill: "Guitar", projects: ["Learn 20 classic songs", "Write and record original song", "Master fingerpicking technique"] },
    { skill: "Piano", projects: ["Play classical piece recital", "Compose original piano composition", "Learn jazz improvisation basics"] },
    { skill: "Drums", projects: ["Play along to favorite album", "Create original drum beats", "Master polyrhythmic patterns"] },
    { skill: "Violin", projects: ["Perform solo violin piece", "Play in chamber music ensemble", "Learn fiddle style techniques"] },
    { skill: "Bass Guitar", projects: ["Learn classic basslines", "Record bass for band project", "Master slap bass technique"] },
    { skill: "Ukulele", projects: ["Play Hawaiian traditional songs", "Write ukulele arrangements", "Perform at local open mic"] },
    { skill: "Saxophone", projects: ["Learn jazz standard repertoire", "Play in community big band", "Master extended saxophone techniques"] },
    { skill: "Trumpet", projects: ["Play classical trumpet solos", "Learn jazz improvisation", "Perform in brass ensemble"] },
    { skill: "Cello", projects: ["Learn Bach cello suites", "Play in string quartet", "Explore contemporary cello techniques"] },
    { skill: "Flute", projects: ["Master breath control exercises", "Learn flute concerto", "Explore world flute traditions"] },
    { skill: "Harmonica", projects: ["Learn blues harmonica styles", "Play folk song accompaniment", "Master chromatic harmonica"] },
    { skill: "Banjo", projects: ["Learn bluegrass picking patterns", "Play traditional folk songs", "Master clawhammer technique"] }
  ],

  musicproduction: [
    { skill: "Logic Pro", projects: ["Produce complete album", "Create beat library collection", "Build mixing template system"] },
    { skill: "Ableton Live", projects: ["Create electronic music EP", "Build live performance setup", "Design custom instrument racks"] },
    { skill: "Pro Tools", projects: ["Record and mix band album", "Create professional vocal chain", "Build studio template collection"] },
    { skill: "FL Studio", projects: ["Create hip-hop beat collection", "Build EDM track series", "Design custom sample library"] },
    { skill: "Mixing", projects: ["Mix 10 different genre songs", "Create mixing preset library", "Build reference track collection"] },
    { skill: "Mastering", projects: ["Master complete album project", "Create mastering chain presets", "Build loudness standard comparison"] },
    { skill: "Sound Design", projects: ["Create synthesizer patch library", "Build foley sound collection", "Design ambient soundscape series"] },
    { skill: "Audio Recording", projects: ["Record live band session", "Create home studio setup", "Build microphone technique guide"] },
    { skill: "MIDI Programming", projects: ["Create realistic orchestral mockup", "Build drum programming library", "Design MIDI controller setup"] },
    { skill: "Synthesis", projects: ["Create analog synthesizer patches", "Build modular synthesis setup", "Design FM synthesis experiments"] },
    { skill: "Sampling", projects: ["Create sample-based beats", "Build vinyl record sample library", "Design granular synthesis pieces"] },
    { skill: "Audio Editing", projects: ["Create podcast audio workflow", "Build audio restoration techniques", "Design creative editing effects"] },
    { skill: "Music Theory for Producers", projects: ["Analyze hit songs chord progressions", "Create melody writing exercises", "Build harmonic progression library"] }
  ],

  languages: [
    { skill: "Spanish", projects: ["Have 30-minute conversation with native speaker", "Watch Spanish movie without subtitles", "Write journal entries for 30 days"] },
    { skill: "French", projects: ["Read French novel cover to cover", "Plan trip to France in French", "Cook French recipes following French instructions"] },
    { skill: "German", projects: ["Understand German news podcast", "Write German business emails", "Navigate German bureaucracy simulation"] },
    { skill: "Japanese", projects: ["Read manga in Japanese", "Order food in Japanese restaurant", "Write hiragana and katakana from memory"] },
    { skill: "Mandarin Chinese", projects: ["Have phone conversation in Mandarin", "Navigate Chinese social media", "Write Chinese characters for common words"] },
    { skill: "Italian", projects: ["Cook Italian recipes from Italian cookbooks", "Understand Italian opera lyrics", "Navigate Italy travel planning in Italian"] },
    { skill: "Portuguese", projects: ["Watch Brazilian TV shows", "Read Portuguese news articles", "Have video chat with Portuguese speakers"] },
    { skill: "Korean", projects: ["Watch K-dramas without subtitles", "Order Korean food in Korean", "Write Korean hangul fluently"] },
    { skill: "Arabic", projects: ["Read Arabic news headlines", "Have basic Arabic conversation", "Write Arabic script correctly"] },
    { skill: "Russian", projects: ["Read Russian literature excerpts", "Understand Russian YouTube videos", "Navigate Russian websites"] },
    { skill: "Dutch", projects: ["Plan Netherlands trip in Dutch", "Read Dutch children's books", "Have Dutch video call conversation"] },
    { skill: "Sign Language", projects: ["Have 10-minute ASL conversation", "Interpret song into sign language", "Teach someone basic sign language"] }
  ],

  projectmanagement: [
    { skill: "Agile/Scrum", projects: ["Lead sprint planning for team project", "Create user story backlog system", "Facilitate retrospective meetings"] },
    { skill: "Kanban", projects: ["Set up team Kanban board", "Optimize workflow processes", "Create visual project dashboard"] },
    { skill: "Risk Management", projects: ["Create project risk assessment matrix", "Build contingency planning system", "Design risk monitoring dashboard"] },
    { skill: "Stakeholder Management", projects: ["Create stakeholder communication plan", "Build stakeholder engagement strategy", "Design feedback collection system"] },
    { skill: "Budget Management", projects: ["Create project budget tracking system", "Build cost forecasting model", "Design expense approval workflow"] },
    { skill: "Resource Planning", projects: ["Create team capacity planning tool", "Build resource allocation dashboard", "Design skill gap analysis system"] },
    { skill: "Timeline Management", projects: ["Create detailed project schedule", "Build milestone tracking system", "Design critical path analysis"] },
    { skill: "Quality Management", projects: ["Create quality assurance framework", "Build testing and review processes", "Design quality metrics dashboard"] },
    { skill: "Communication Planning", projects: ["Create project communication strategy", "Build status reporting system", "Design meeting management framework"] },
    { skill: "Change Management", projects: ["Create change request process", "Build impact assessment system", "Design change communication plan"] },
    { skill: "Team Leadership", projects: ["Lead cross-functional project team", "Create team development plan", "Design conflict resolution process"] },
    { skill: "Project Documentation", projects: ["Create comprehensive project charter", "Build documentation management system", "Design lessons learned repository"] },
    { skill: "Vendor Management", projects: ["Create vendor selection process", "Build contractor management system", "Design performance evaluation framework"] }
  ],

  cooking: [
    { skill: "Knife Skills", projects: ["Master 10 essential knife cuts", "Prep vegetables for week of meals", "Break down whole chicken"] },
    { skill: "Baking", projects: ["Bake bread from scratch weekly", "Create wedding cake design", "Master pastry techniques"] },
    { skill: "Italian Cooking", projects: ["Make pasta from scratch", "Create authentic regional Italian menu", "Master Italian sauce techniques"] },
    { skill: "French Cooking", projects: ["Master mother sauces", "Cook classic French bistro menu", "Learn French pastry techniques"] },
    { skill: "Asian Cooking", projects: ["Master wok cooking techniques", "Create authentic dim sum", "Learn knife skills for sushi"] },
    { skill: "Grilling/BBQ", projects: ["Master low and slow BBQ", "Grill perfect steaks consistently", "Create signature BBQ sauce"] },
    { skill: "Meal Prep", projects: ["Prep week of healthy meals", "Create freezer meal system", "Design portion control strategy"] },
    { skill: "Food Photography", projects: ["Create Instagram food portfolio", "Style dishes for photography", "Build food styling kit"] },
    { skill: "Fermentation", projects: ["Make homemade kombucha", "Create fermented vegetable collection", "Master sourdough starter"] },
    { skill: "Cake Decorating", projects: ["Create fondant sculpture cake", "Master buttercream piping techniques", "Design wedding cake portfolio"] },
    { skill: "Wine Pairing", projects: ["Create wine and food pairing menu", "Learn wine tasting techniques", "Build wine knowledge database"] },
    { skill: "Molecular Gastronomy", projects: ["Create spherification dishes", "Master foam and gel techniques", "Design modernist tasting menu"] },
    { skill: "Food Preservation", projects: ["Can seasonal produce", "Create jerky and dried foods", "Master pickling techniques"] },
    { skill: "Chocolate Making", projects: ["Temper chocolate properly", "Create filled chocolate collection", "Design chocolate sculpture"] }
  ]
}