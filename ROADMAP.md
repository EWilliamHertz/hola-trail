# Hola Trail: Spanish Curriculum & Engineering Roadmap
*A Step-by-Step Blueprint for Tiered Spanish Learning, Categorized Lectures, and Daily 1-Hour AI Pair Programming*

---

## 1. Executive Strategy & Workflow Model

### 1.1 The 1-Hour Daily Cadence
To balance rapid progress with sustainable daily momentum, each 60-minute session is split between high-level pedagogical architecture and rapid agentic implementation:

```
┌─────────────────────────────────┬─────────────────────────────────┬──────────────┐
│  25 Minutes: Argon              │  30 Minutes: Flash              │  5 Minutes   │
│  (gemini.google.com)            │  (AntiGravity)                  │  Verification│
├─────────────────────────────────┼─────────────────────────────────┼──────────────┤
│ • Pedagogy & linguistic design  │ • Code implementation           │ • Live check │
│ • Content & distractor drafting │ • UI / Component refinement     │ • Streak/XP  │
│ • Lesson JSON schema generation │ • Git commit & cloud sync test  │ • Git push   │
└─────────────────────────────────┴─────────────────────────────────┴──────────────┘
```

* **Argon (via gemini.google.com)**: Used for deep reasoning, CEFR linguistic alignment, culturally authentic dialogues, grammatically sound distractor generation, and explanatory notes.
* **Flash (via AntiGravity)**: Used for automated code refactoring, DOM updates, component testing, Firestore data migration, and Git version control.

---

## 2. Voice Architecture: How the Current Voice Works & How to Replicate It

You requested to keep the current voice mechanism while ensuring it is easily replicated for all future lessons.

### 2.1 The Current Voice Engine
Hola Trail uses the browser's native **Web Speech API (`SpeechSynthesis`)** configured specifically for Spanish:

```javascript
function speak(textToSpeak) {
  if (!('speechSynthesis' in window)) return;
  
  speechSynthesis.cancel(); // Stop any pending speech
  const u = new SpeechSynthesisUtterance(textToSpeak);
  u.lang = 'es-ES';        // Spanish locale
  u.rate = 0.82;           // Slightly reduced tempo for clear comprehension

  // Prioritize Spanish native voice from available system voices
  const voices = speechSynthesis.getVoices();
  const voice = voices.find(v => v.lang === 'es-ES') || 
                voices.find(v => v.lang.startsWith('es'));
  if (voice) u.voice = voice;

  speechSynthesis.speak(u);
}
```

### 2.2 How to Replicate for Future Lectures
The beauty of this architecture is **declarative zero-config audio**:
1. You do **not** need to touch audio code when adding new lectures.
2. Every item defined in the `COURSE` dataset automatically inherits:
   * Native pronunciation button in the Discover/Learn phase.
   * Audio playback in Listening Quiz questions.
   * Inline pronunciation previews across all lessons.
3. As long as you provide the Spanish text in index `0` of the item array (`['Spanish phrase', 'English translation', 'Cultural/Grammar tip']`), the voice engine pronounces it immediately.

---

## 3. Tiered Spanish Curriculum Matrix

The curriculum is structured across three progressive proficiency tiers (CEFR-aligned) and four core modalities: **Speaking (Pronunciation), Reading, Writing (Typing & Accents), and Listening**.

| Tier | Proficiency | Primary Focus | Target Vocabulary | Grammar Focus |
| :--- | :--- | :--- | :--- | :--- |
| **Tier 1** | **A1 (Starter / Survival)** | First interactions, everyday survival, immediate needs | 36–100 expressions | Present tense (ser/estar intro), gender agreement, basic questions |
| **Tier 2** | **A2 (Elementary / Practical)** | Daily routines, social exchanges, navigating the Spanish-speaking world | 100–250 expressions | Regular present conjugations, reflexives, near future (*ir a*), direct object pronouns |
| **Tier 3** | **B1 (Conversational / Intermediate)** | Expressing opinions, storytelling, past experiences, nuance | 250–500 expressions | Preterite vs. Imperfect, Gustar-like verbs, basic Subjunctive triggers |

---

## 4. Category & Lecture Structure

Future lectures are grouped into thematic **Categories / Trails**, allowing learners to choose thematic paths (or follow the structured progression):

### Category 1: Foundations & Real-World Courtesy (Tier 1)
* **Lecture 1.1**: *Your First Hola* — Greetings, farewells, essential courtesy *(Current)*
* **Lecture 1.2**: *Meet Someone New* — Introductions, names, simple feelings *(Current)*
* **Lecture 1.3**: *Polite Power Tools* — Expressing gratitude, apologies (*disculpe, con permiso, perdón*), requesting help.

### Category 2: Food, Tapas & Dining (Tiers 1 & 2)
* **Lecture 2.1**: *At the Café* — Ordering coffee, tea, water, paying the bill *(Current)*
* **Lecture 2.2**: *The Tapas Bar* — Ordering small plates, allergies (*sin gluten/lácteos*), asking recommendations.
* **Lecture 2.3**: *At the Market & Grocery* — Quantities, asking prices (*¿cuánto cuesta?*), fresh produce.

### Category 3: City Navigation & Travel (Tiers 1 & 2)
* **Lecture 3.1**: *Find Your Way* — Directions (*derecha, izquierda, todo recto*), bathroom *(Current)*
* **Lecture 3.2**: *Public Transit & Taxis* — Metro, train station, tickets, stops, arrival times.
* **Lecture 3.3**: *Hotel & Accommodation* — Check-in, room amenities, Wi-Fi, reporting small issues.

### Category 4: Numbers, Time & Daily Routines (Tiers 1 & 2)
* **Lecture 4.1**: *Make It Count* — Core counting 1–10 *(Current)*
* **Lecture 4.2**: *Time & Schedules* — What time is it (*¿Qué hora es?*), days of the week, times of day.
* **Lecture 4.3**: *Daily Habits* — Waking up, eating meals, work/study routines.

### Category 5: Social Connections, Feelings & Hobbies (Tiers 2 & 3)
* **Lecture 5.1**: *Everyday Little Wins* — Hunger, thirst, basic preferences *(Current)*
* **Lecture 5.2**: *Talking About What You Love* — Likes and dislikes with *gustar* and *encantar*.
* **Lecture 5.3**: *Feelings, Health & Well-being* — Describing emotions (*estar contento/cansado*) and physical states (*me duele...*).

### Category 6: Storytelling & Conversational Fluency (Tier 3)
* **Lecture 6.1**: *What Happened Yesterday?* — Simple past anecdotes (*fui, comí, hablé*).
* **Lecture 6.2**: *Making Plans & Expressing Wishes* — Conditional courtesy (*me gustaría, querría*).
* **Lecture 6.3**: *Expressing Nuance & Opinion* — Agreeing, disagreeing (*en mi opinión, creo que sí*).

---

## 5. Modality Design for Exercises

To train speaking, reading, writing, and listening systematically, each lecture includes 4 specialized exercise interaction modes:

```
              ┌──────────────────────────────────────────────┐
              │          LECTURE STUDY & QUIZ MODES          │
              └──────────────────────┬───────────────────────┘
                                     │
     ┌───────────────────┬───────────┴───────────┬───────────────────┐
     ▼                   ▼                       ▼                   ▼
┌─────────────┐   ┌─────────────┐         ┌─────────────┐     ┌─────────────┐
│  LISTENING  │   │   READING   │         │   WRITING   │     │  SPEAKING   │
├─────────────┤   ├─────────────┤         ├─────────────┤     ├─────────────┤
│ • Audio TTS │   │ • Context   │         │ • Exact     │     │ • Pronounce │
│ • Text-hide │   │   meaning   │         │   typing    │     │   check     │
│ • Meaning   │   │ • Sentence  │         │ • Accent    │     │ • Listen &  │
│   matching  │   │   scramble  │         │   keyboard  │     │   repeat    │
└─────────────┘   └─────────────┘         └─────────────┘     └─────────────┘
```

1. **Listening**: Play the native speech engine audio with Spanish text hidden. User selects the English meaning or assembles the Spanish phrase.
2. **Reading (Sentence Building & Choice)**: English meaning prompt with draggable or tappable word tiles in Spanish, or multiple-choice translation with semantic distractors.
3. **Writing (Typing with Accents)**: Learner types the exact Spanish expression with punctuation normalization and dedicated accent buttons (`á, é, í, ó, ú, ü, ñ, ¿, ¡`).
4. **Speaking (Pronunciation Guided Practice)**: Dedicated practice screen where the phrase is broken down phonetically (e.g. *buenos días* → "BWEH-nos DEE-as"), with repetitive listening and pacing.

---

## 6. Eight-Week Implementation Schedule (1 Hour / Day)

### Week 1: Data Model & Category Engine
* **Day 1**: Refactor `COURSE` structure in `index.html` to support categories (`COURSE.categories = [...]`).
* **Day 2**: Update Dashboard to display Category Trails and progress per category.
* **Day 3**: Argon Session: Design Category 1 Extension (*Polite Power Tools* content & distractors).
* **Day 4**: AntiGravity Flash: Implement Lecture 1.3 and verify audio and tests.
* **Day 5**: Add category filtering to the Spaced Repetition Review queue.
* **Day 6**: Review streak and XP calculations across multiple categories.
* **Day 7**: Testing, bug polish, and Git sync.

### Week 2: Category 2 (Food & Tapas Bar)
* **Day 8**: Argon: Draft Lecture 2.2 (*The Tapas Bar* — 6 expressions, cultural tips).
* **Day 9**: AntiGravity: Inject Lecture 2.2, test typing, listening, and accents.
* **Day 10**: Argon: Draft Lecture 2.3 (*Market & Grocery* — quantities, prices).
* **Day 11**: AntiGravity: Inject Lecture 2.3; test word-building exercises.
* **Day 12**: Add audio playback speed toggle (0.8x / 1.0x) for speech clarity.
* **Day 13**: Quality verification on mobile viewports.
* **Day 14**: Git commit and push milestone.

### Week 3: Category 3 (City Navigation & Transit)
* **Day 15**: Argon: Draft Lecture 3.2 (*Public Transit & Taxis*).
* **Day 16**: AntiGravity: Implement Lecture 3.2.
* **Day 17**: Argon: Draft Lecture 3.3 (*Hotel & Accommodation*).
* **Day 18**: AntiGravity: Implement Lecture 3.3.
* **Day 19**: Improve quiz distractor engine to pull smart distractors from the same category.
* **Day 20**: Mobile touch polish for tile ordering.
* **Day 21**: Weekly testing & Git push.

### Week 4: Category 4 (Time, Schedule & Tier 1 Completion)
* **Day 22**: Argon: Draft Lecture 4.2 (*Time & Schedules*).
* **Day 23**: AntiGravity: Implement Lecture 4.2.
* **Day 24**: Argon: Draft Lecture 4.3 (*Daily Habits*).
* **Day 25**: AntiGravity: Implement Lecture 4.3.
* **Day 26**: Add "Tier 1: Beginner Essentials" completion milestone badge on Dashboard.
* **Day 27**: Cloud Firestore sync audit (verify user progress updates with expanded dataset).
* **Day 28**: Milestone review and push.

### Weeks 5–6: Tier 2 (Elementary & Social Spanish)
* **Days 29–35**: Implement Category 5 (*Social Connections, Preferences with Gustar*).
* **Days 36–42**: Implement multi-sentence reading comprehension mini-cards.

### Weeks 7–8: Tier 3 (Conversational Nuance & Final Polish)
* **Days 43–49**: Implement Category 6 (*Past experiences and conversational expressions*).
* **Days 50–56**: Performance audit, speech synthesis fallbacks, complete curriculum review.

---

## 7. The Daily Prompt Templates for Your 1-Hour Routine

### Prompt for Argon (gemini.google.com) — ~25 Mins
Copy and paste this into Gemini when designing a new lecture:

```markdown
I am expanding my Spanish learning web app, "Hola Trail".
We are designing:
- Tier: [A1 / A2 / B1]
- Category: [e.g., Food & Dining]
- Lecture Title: [e.g., The Tapas Bar]
- Goal: Teach 6 highly practical expressions with high conversational utility.

Please generate:
1. Exactly 6 Spanish expressions with natural English translations.
2. A friendly, 1-2 sentence linguistic/cultural tip for each expression (mentioning pronunciation tips, stress marks, or cultural context).
3. A lecture introductory note (2 sentences explaining grammar or context).
4. Output the result in this exact JSON format so my coding agent (AntiGravity Flash) can integrate it directly:

```json
{
  "id": "tapas-bar",
  "category": "food",
  "tier": "A1",
  "icon": "🥘",
  "title": "The Tapas Bar",
  "subtitle": "Order small plates and snacks with ease.",
  "note": "In Spain, tapas often come free with a drink or are ordered in raciones (larger portions) to share.",
  "items": [
    ["una ración de patatas bravas", "an order of spicy potatoes", "Bravas refers to the spicy sauce."],
    ["para compartir", "to share", "Essential when ordering tapas with friends."],
    ["¿qué nos recomienda?", "what do you recommend to us?", "A friendly, polite question for your server."],
    ["soy alérgico al gluten", "I am allergic to gluten", "Change alérgico to alérgica if you identify as female."],
    ["¿está picante?", "is it spicy?", "Use estar here because spiciness is a temporary quality of the food."],
    ["otra ronda, por favor", "another round, please", "Use ronda for another round of drinks or tapas."]
  ]
}
```
```

### Prompt for Flash (AntiGravity) — ~30 Mins
Feed Argon's JSON output directly into AntiGravity:

```markdown
Please integrate this new lecture JSON into index.html under the COURSE dataset:
[Paste Argon's JSON here]

Ensure:
1. All 6 expressions hook into the existing speech synthesis voice engine.
2. The lesson appears in the Category card grid and Dashboard.
3. Spaced repetition levels and quiz interactions function properly.
4. Run syntax checks and commit the update.
```

---

## 8. Exporting This Document to Google Docs

To export this roadmap cleanly into Google Docs:

1. **Select All**: Open this file (`ROADMAP.md`), press `Ctrl + A` (or `Cmd + A`), and `Ctrl + C` (Copy).
2. **Open Google Docs**: Go to [docs.google.com](https://docs.google.com) and create a **Blank document**.
3. **Paste**: Press `Ctrl + V` (or `Cmd + V`).
   * *Google Docs natively converts GitHub Markdown headings, tables, code boxes, and lists into formatted Google Docs styles.*
4. **Optional Styling Polish in Google Docs**:
   * Change document font to *Inter* or *Arial* for a modern layout.
   * Color section headings with brand dark green (`#176B55`).
