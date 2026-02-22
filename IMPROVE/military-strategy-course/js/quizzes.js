// ============================================
// THE ART OF WAR - QUIZ & ASSESSMENT SYSTEM
// ============================================

// Quiz state management
class QuizManager {
    constructor() {
        this.currentQuiz = null;
        this.answers = {};
        this.score = 0;
        this.totalQuestions = 0;
        this.timeRemaining = 0;
        this.timerInterval = null;
    }

    initQuiz(quizType, quizData) {
        this.currentQuiz = quizType;
        this.answers = {};
        this.score = 0;
        this.totalQuestions = Object.keys(quizData).length;
        
        document.querySelectorAll('.quiz-option').forEach(opt => {
            opt.classList.remove('selected');
        });
        
        const feedbackEl = document.getElementById('quiz-feedback');
        if (feedbackEl) {
            feedbackEl.style.display = 'none';
        }
    }

    recordAnswer(questionNum, answer) {
        this.answers[questionNum] = answer;
    }

    submitQuiz(correctAnswers) {
        this.score = 0;
        let results = [];
        
        for (let q in correctAnswers) {
            if (this.answers[q] === correctAnswers[q]) {
                this.score++;
                results.push(`Q${q.replace('Q', '')}: Correct`);
            } else {
                results.push(`Q${q.replace('Q', '')}: Incorrect (Answer: ${correctAnswers[q]})`);
            }
        }
        
        return {
            score: this.score,
            total: this.totalQuestions,
            percentage: Math.round((this.score / this.totalQuestions) * 100),
            results: results
        };
    }

    startTimer(minutes, callback) {
        this.timeRemaining = minutes * 60;
        
        const timerEl = document.getElementById('exam-timer');
        if (timerEl) {
            this.updateTimerDisplay(timerEl);
        }
        
        this.timerInterval = setInterval(() => {
            this.timeRemaining--;
            
            if (timerEl) {
                this.updateTimerDisplay(timerEl);
            }
            
            if (this.timeRemaining <= 0) {
                this.stopTimer();
                if (callback) {
                    callback();
                }
            }
        }, 1000);
    }

    updateTimerDisplay(el) {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        el.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }
}

const quizManager = new QuizManager();

// Quiz Questions for all modules
const quizQuestions = {
    // MODULE 1: FOUNDATIONS
    foundations: [
        {
            id: 'Q1',
            question: 'What is the fundamental definition of war?',
            options: ['A. Organized chaos', 'B. Organized violence for political ends', 'C. Diplomacy by other means', 'D. Random fighting'],
            correct: 'B',
            explanation: 'War is defined as organized violence applied by one group against another to achieve specific political objectives. It requires organization (structure), violence (the means), and political purpose (the reason).'
        },
        {
            id: 'Q2',
            question: 'According to Sun Tzu, what is the supreme art of war?',
            options: ['A. Winning every battle', 'B. Having the strongest army', 'C. Subduing the enemy without fighting', 'D. Defending fortress walls'],
            correct: 'C',
            explanation: 'Sun Tzu teaches that the highest excellence is to subdue the enemy without fighting. A victory requiring no combat is safest and most economical.'
        },
        {
            id: 'Q3',
            question: 'Which level of war concerns winning battles and engagements?',
            options: ['A. Grand Strategy', 'B. Operations', 'C. Tactics', 'D. Political Strategy'],
            correct: 'C',
            explanation: 'Tactics covers direct combat: deploying forces on the battlefield, maneuvering, and employing weapons to defeat the enemy in specific battles.'
        },
        {
            id: 'Q4',
            question: 'What must you know according to Sun Tzu to be imperiled in no battles?',
            options: ['A. Only yourself', 'B. Only the enemy', 'C. Both yourself and the enemy', 'D. Neither—act boldly'],
            correct: 'C',
            explanation: 'Sun Tzu states "Know the enemy and know yourself; in a hundred battles, you will never be in peril." Accurate knowledge of both sides is essential.'
        },
        {
            id: 'Q5',
            question: 'What does the Melian Dialogue from Thucydides illustrate?',
            options: ['A. The power of democracy', 'B. How justice always prevails', 'C. Power dynamics in international relations', 'D. The value of neutrality'],
            correct: 'C',
            explanation: 'The Melian Dialogue illustrates the realist perspective that the strong do what they can and the weak suffer what they must, capturing power dynamics in international relations.'
        },
        {
            id: 'Q6',
            question: 'What caused the Peloponnesian War according to Thucydides?',
            options: ['A. Trade disputes', 'B. Religious differences', 'C. Spartan fear of growing Athenian power', 'D. Assassination of a leader'],
            correct: 'C',
            explanation: 'Thucydides explains that the war began because Spartan leaders feared growing Athenian power, known today as the "Thucydides Trap."'
        },
        {
            id: 'Q7',
            question: 'What does the principle of mass require?',
            options: ['A. Many soldiers overall', 'B. Concentration at decisive point', 'C. Attack everywhere at once', 'D. Defend multiple positions'],
            correct: 'B',
            explanation: 'The principle of mass demands concentrating overwhelming force at the decisive place and time, not spreading forces thin across multiple objectives.'
        },
        {
            id: 'Q8',
            question: 'What does economy of force mean?',
            options: ['A. Saving money on weapons', 'B. Minimal commitment to secondary tasks', 'C. Using fewer soldiers', 'D. Fighting cheaply'],
            correct: 'B',
            explanation: 'Economy of force means allocating no more forces to secondary tasks than necessary, so maximum strength can be applied to the main effort.'
        },
        {
            id: 'Q9',
            question: 'What is the purpose of unity of command?',
            options: ['A. Multiple commanders for balance', 'B. Single authority over operations', 'C. Democratic decision-making', 'D. Rotating leadership'],
            correct: 'B',
            explanation: 'Unity of command means a single commander has authority over all participating forces, preventing coordination problems and confusion.'
        },
        {
            id: 'Q10',
            question: 'What does the principle of simplicity emphasize?',
            options: ['A. Complex detailed plans', 'B. Simple flexible plans', 'C. No planning needed', 'D. Attack the weakest point'],
            correct: 'B',
            explanation: 'Simplicity favors clean, direct plans over complex schemes. Simple plans communicate better, execute easier, and handle friction more robustly.'
        },
        {
            id: 'Q11',
            question: 'What is meant by a center of gravity?',
            options: ['A. The geographic center of a country', 'B. Source of power and strength', 'C. Heavy artillery weapons', 'D. The capital city only'],
            correct: 'B',
            explanation: 'Center of gravity represents the source of power giving an enemy strength and freedom of action—could be leadership, territory, industry, morale, etc.'
        },
        {
            id: 'Q12',
            question: 'What is the difference between the nature of war and the character of war?',
            options: ['A. No difference, same thing', 'B. Nature is purpose, character is how it is fought (techniques)', 'C. Character is purpose, nature is technique', 'D. Nature never changes, character is always the same'],
            correct: 'B',
            explanation: 'The nature of war (organized violence for political ends) does not change. The character of war (how it is fought—weapons, methods, organizations) does change with time and technology.'
        }
    ],

    // MODULE 2: GREEK AND ROMAN WARFARE
    greekRoman: [
        {
            id: 'Q1',
            question: 'What was the primary weapon of the Greek hoplite?',
            options: ['A. Sword', 'B. Spear/dory', 'C. Bow', 'D. Javelin'],
            correct: 'B',
            explanation: 'The hoplite fought primarily with a thrusting spear called the dory, typically 7-9 feet long. The sword was a backup weapon.'
        },
        {
            id: 'Q2',
            question: 'What was the hoplite shield called?',
            options: ['A. Shield', 'B. Aspis/hoplon', 'C. Scutum', 'D. Clipeus'],
            correct: 'B',
            explanation: 'The hoplite shield was called the aspis or hoplon. It was a large round shield about 3 feet across that covered most of the soldier.'
        },
        {
            id: 'Q3',
            question: 'What was the phalanx most vulnerable to?',
            options: ['A. Frontal assault', 'B. Flank attacks', 'C. Archers', 'D. Cavalry'],
            correct: 'B',
            explanation: 'The phalanx was vulnerable to flank attacks. Because hoplites carried shields on their left arms, the right flank was especially exposed.'
        },
        {
            id: 'Q4',
            question: 'What was the main Roman tactical unit?',
            options: ['A. Phalanx', 'B. Manipular system', 'C. Legion only', 'D. Cohort only'],
            correct: 'B',
            explanation: 'The Romans initially used the manipular system—legions divided into maniples that could maneuver independently, unlike the more rigid phalanx.'
        },
        {
            id: 'Q5',
            question: 'What made Roman military organization distinctive?',
            options: ['A. Only aristocrats served', 'B. Professional standing army', 'C. Citizen militia and professional army', 'D. Mercenary forces'],
            correct: 'C',
            explanation: 'Rome evolved from citizen militia to professional army while maintaining Roman citizenship as a unifying identity, creating a uniquely effective military institution.'
        },
        {
            id: 'Q6',
            question: 'What was the Roman pilum?',
            options: ['A. Shield', 'B. Throwing spear', 'C. Sword', 'D. Dagger'],
            correct: 'B',
            explanation: 'The pilum was a Roman throwing spear designed to bend on impact, making it useless for the enemy to throw back while rendering enemy shields less effective.'
        },
        {
            id: 'Q7',
            question: 'What was the Roman testudo formation?',
            options: ['A. Attack formation', 'B. Defensive shield wall', 'C. Siege engine', 'D. Cavalry tactic'],
            correct: 'B',
            explanation: 'The testudo was a defensive formation where soldiers locked their shields overhead and on all sides, resembling a tortoise shell, to protect against missile fire.'
        },
        {
            id: 'Q8',
            question: 'What advantage did Roman engineering provide?',
            options: ['A. Better weapons only', 'B. Roads, camps, siege works', 'C. Naval superiority', 'D. Cavalry superiority'],
            correct: 'B',
            explanation: 'Roman engineering built roads, camps, fortifications, and siege works that gave them logistical and strategic advantages over enemies.'
        },
        {
            id: 'Q9',
            question: 'What battle showed Hannibal\'s tactical brilliance?',
            options: ['A. Cannae', 'B. Zama', 'C. Marathon', 'D. Salamis'],
            correct: 'A',
            explanation: 'Cannae (216 BCE) was Hannibal\'s masterpiece—using double envelopment to destroy a larger Roman force through superior positioning and timing.'
        },
        {
            id: 'Q10',
            question: 'What ended the Macedonian phalanx\'s dominance?',
            options: ['A. Roman swords', 'B. Roman flexibility on rough terrain', 'C. Better Roman armor', 'D. Roman cavalry'],
            correct: 'B',
            explanation: 'The Macedonian phalanx was devastating on flat terrain but inflexible in rough ground. Romans exploited this at Pydna (168 BCE), defeating the phalanx through maneuver.'
        },
        {
            id: 'Q11',
            question: 'What were Roman siege towers?',
            options: ['A. Walls', 'B. Mobile towers to breach fortifications', 'C. Catapults', 'D. Moats'],
            correct: 'B',
            explanation: 'Roman siege towers were mobile wooden structures built to the height of city walls, allowing Roman troops to breach fortifications while protected inside.'
        },
        {
            id: 'Q12',
            question: 'What was special about Spartan military training?',
            options: ['A. None, they were natural fighters', 'B. Agoge—the rigorous state training system', 'C. Mercenary instructors', 'D. Short training before battle'],
            correct: 'B',
            explanation: 'Spartans underwent the Agoge, a rigorous state-organized training system from childhood, producing what was considered the finest hoplites in Greece.'
        }
    ],

    // MODULE 3: MEDIEVAL WARFARE
    medieval: [
        {
            id: 'Q1',
            question: 'What was feudal military obligation?',
            options: ['A. Money taxes', 'B. Military service in exchange for land', 'C. Professional soldiers', 'D. Mercenary contracts'],
            correct: 'B',
            explanation: 'Feudal military obligation meant knights served their lords in exchange for land (fiefs), typically for 40 days per year in the early feudal period.'
        },
        {
            id: 'Q2',
            question: 'What was the knight\'s primary military role?',
            options: ['A. Archer', 'B. Heavy armored cavalry', 'C. Infantry', 'D. Engineer'],
            correct: 'B',
            explanation: 'Knights served as heavy armored cavalry—shock troops that could break infantry formations with the momentum of charge and the protection of plate armor.'
        },
        {
            id: 'Q3',
            question: 'What made castles strong defensive positions?',
            options: ['A. Only thickness of walls', 'B. Concentric defenses and strategic placement', 'C. Large garrisons only', 'D. Moats only'],
            correct: 'B',
            explanation: 'Effective castles used concentric defenses (multiple walls), strategic placement on high ground or controlling river crossings, and features like moats and gatehouses.'
        },
        {
            id: 'Q4',
            question: 'What was a common siege method?',
            options: ['A. Direct assault only', 'B. Starvation blockade', 'C. Poison the water', 'D. Bribing defenders'],
            correct: 'B',
            explanation: 'Starvation through blockade was the most common and reliable siege method. Most castles fell when defenders ran out of food and water rather than through assault.'
        },
        {
            id: 'Q5',
            question: 'What were the Crusades?',
            options: ['A. Trade wars', 'B. Religious wars to regain the Holy Land', 'C. Dynastic conflicts', 'D. Peasant rebellions'],
            correct: 'B',
            explanation: 'The Crusades were religious wars called by popes and kings to regain the Holy Land from Muslim control, demonstrating how religious motivation could mobilize large forces.'
        },
        {
            id: 'Q6',
            question: 'What weapon became increasingly important in medieval warfare?',
            options: ['A. Sword', 'B. Bow/arrow and later crossbow', 'C. Mace', 'D. Lance'],
            correct: 'B',
            explanation: 'Bows (especially the English longbow) and crossbows became increasingly important. They could kill armored knights at range, undermining cavalry dominance.'
        },
        {
            id: 'Q7',
            question: 'What was the longbow\'s advantage?',
            options: ['A. Cheap to make', 'B. Range, rate of fire, armor penetration', 'C. Easy to use', 'D. Short range accuracy'],
            correct: 'B',
            explanation: 'The English longbow had range exceeding 300 yards, high rate of fire (10+ arrows per minute), and could penetrate early plate armor at shorter ranges.'
        },
        {
            id: 'Q8',
            question: 'What was the Battle of Agincourt (1415) notable for?',
            options: ['A. Decisive French victory', 'B. English longbow defeating French knights', 'C. First use of cannons', 'D. Crusader victory'],
            correct: 'B',
            explanation: 'Agincourt demonstrated how longbows could devastate charging French knights in mud, proving missile weapons could overcome armored cavalry.'
        },
        {
            id: 'Q9',
            question: 'What limited effectiveness of medieval armies?',
            options: ['A. Lack of brave soldiers', 'B. Short service periods and poor logistics', 'C. Better enemy weapons', 'D. Bad terrain'],
            correct: 'B',
            explanation: 'Medieval armies typically had limited service periods (40 days in early feudalism) and poor logistics. They could not sustain campaigns for long periods.'
        },
        {
            id: 'Q10',
            question: 'What changed in medieval warfare by the late period?',
            options: ['A. Nothing, same throughout', 'B. Evolution toward professional infantry', 'C. Knights became infantry', 'D. Castles were abandoned'],
            correct: 'B',
            explanation: 'By the late medieval period, professional infantry (Swiss pikemen, German landsknechts) and increasingly professionalized armies were replacing feudal levies.'
        },
        {
            id: 'Q11',
            question: 'What was Swiss infantry known for?',
            options: ['A. Archers', 'B. Pike formations in deep columns', 'C. Heavy cavalry', 'D. Siege engineers'],
            correct: 'B',
            explanation: 'Swiss infantry were renowned for their deep pike formations. They could defeat cavalry and infantry alike, demonstrating the rising importance of professional infantry.'
        },
        {
            id: 'Q12',
            question: 'What was heraldry?',
            options: ['A. Type of weapon', 'B. System of identification on shields and banners', 'C. Religion', 'D. Currency'],
            correct: 'B',
            explanation: 'Heraldry was a system of colorful designs on shields, banners, and surcoats that identified knights and nobles, allowing leaders to coordinate and identify units on the battlefield.'
        }
    ],

    // MODULE 4: GUNPOWDER
    gunpowder: [
        {
            id: 'Q1',
            question: 'Where did gunpowder originate?',
            options: ['A. Europe', 'B. China', 'C. India', 'D. Middle East'],
            correct: 'B',
            explanation: 'Gunpowder was invented in China around the 9th century for use in fireworks and early weapons. It reached Europe via trade routes by the 13th-14th centuries.'
        },
        {
            id: 'Q2',
            question: 'What was the early effect of gunpowder on fortifications?',
            options: ['A. Made walls stronger', 'B. Rendered medieval castle walls obsolete', 'C. Had little effect', 'D. Made knights obsolete first'],
            correct: 'B',
            explanation: 'Cannons rendered traditional castle walls obsolete. Old-style high vertical walls were vulnerable to cannon fire. New designs (trace italienne) with low, thick angles were developed.'
        },
        {
            id: 'Q3',
            question: 'What was the Italian Wars (1494-1559) significance?',
            options: ['A. Trade dispute', 'B. Gunpowder warfare development', 'C. Religious war', 'D. Civil war'],
            correct: 'B',
            explanation: 'The Italian Wars saw the development and refinement of gunpowder warfare in Europe, as French, Spanish, and Italian armies tested new weapons and tactics.'
        },
        {
            id: 'Q4',
            question: 'What formed the Spanish tercio?',
            options: ['A. Cavalry only', 'B. Pike, arquebusiers, swordsmen combined', 'C. Artillery only', 'D. Infantry only'],
            correct: 'B',
            explanation: 'The Spanish tercio combined pikemen, arquebusiers (early musketeers), and sword-and-buckler men in mutually supporting formations, dominating European battlefields for a century.'
        },
        {
            id: 'Q5',
            question: 'What was the arquebus?',
            options: ['A. Pike', 'B. Early musket', 'C. Cannon', 'D. Siege engine'],
            correct: 'B',
            explanation: 'The arquebus was an early handheld firearm, a precursor to the musket. It was less powerful than later muskets but began changing battlefield dynamics.'
        },
        {
            id: 'Q6',
            question: 'What challenge did early firearms present?',
            options: ['A. Too powerful', 'B. Slow reload time and low accuracy', 'C. Too cheap', 'D. Too safe'],
            correct: 'B',
            explanation: 'Early firearms suffered from slow reload times (separate ball and powder) and poor accuracy compared to bows. But they required less training and armor penetration improved.'
        },
        {
            id: 'Q7',
            question: 'What was the trace italienne?',
            options: ['A. Italian flag', 'B. New fortress design with low thick angled walls', 'C. Cavalry tactic', 'D. Naval formation'],
            correct: 'B',
            explanation: 'The trace italienne was a new fortress design developed in Italy with low, thick walls and angular bastions designed to resist cannon fire and provide overlapping fields of fire.'
        },
        {
            id: 'Q8',
            question: 'What did gunpowder do to knightly cavalry?',
            options: ['A. Strengthened it', 'B. Undermined cavalry dominance', 'C. No effect on knights', 'D. Made knights cheaper'],
            correct: 'B',
            explanation: 'Gunpowder weapons undermined cavalry dominance. Firearms could stop cavalry charges, and firearms made armor obsolete or impossibly heavy. Cavalry remained useful but not dominant.'
        },
        {
            id: 'Q9',
            question: 'What was the Siege of Malta (1565) significance?',
            options: ['A. Pirate raid', 'B. Gunpowder fortress defense', 'C. Trade war', 'D. Naval battle only'],
            correct: 'B',
            explanation: 'The Siege of Malta demonstrated how modern fortifications using trace italienne principles could resist massive sieges, even against elite Ottoman forces.'
        },
        {
            id: 'Q10',
            question: 'What happened to feudal levies with gunpowder?',
            options: ['A. Became stronger', 'B. Gradually replaced by professional armies', 'C. No change', 'D. Became the elite'],
            correct: 'B',
            explanation: 'Feudal levies gradually gave way to professional armies. Gunpowder weapons required training, and standing armies could maintain firearm competence better than periodic levies.'
        },
        {
            id: 'Q11',
            question: 'What was the advantage of firearms over bows?',
            options: ['A. Better range', 'B. Faster fire', 'C. Training time and armor penetration', 'D. More accurate'],
            correct: 'C',
            explanation: 'Firearms required less training than bows (longbows took years of practice) and could penetrate armor better. They were slower and less accurate initially, but improved over time.'
        },
        {
            id: 'Q12',
            question: 'What was the Battle of Pavia (1525) notable for?',
            options: ['A. Victory for bows', 'B. Gunpowder weapons decisive', 'C. Crusade', 'D. English civil war'],
            correct: 'B',
            explanation: 'The Battle of Pavia demonstrated the decisive impact of gunpowder weapons, with Spanish arquebusiers defeating French knights and King Francis I captured.'
        }
    ],

    // MODULE 5: RENAISSANCE WARFARE
    renaissance: [
        {
            id: 'Q1',
            question: 'What did Machiavelli argue about military power?',
            options: ['A. Mercenaries were ideal', 'B. Citizen armies and state responsibility', 'C. Knights were best', 'D. Gunpowder was evil'],
            correct: 'B',
            explanation: 'Machiavelli argued in Art of War that citizen armies were superior to mercenaries, and that the state had responsibility to maintain military forces for security and liberty.'
        },
        {
            id: 'Q2',
            question: 'What were the Dutch military reforms under Maurice of Nassau?',
            options: ['A. More knights', 'B. Drill and standardization', 'C. Abandon gunpowder', 'D. Larger castles'],
            correct: 'B',
            explanation: 'Maurice of Nassau standardized drill, formations, and equipment, creating a highly disciplined professional army that became a model across Europe.'
        },
        {
            id: 'Q3',
            question: 'What was pike and shot?',
            options: ['A. Cannon and artillery', 'B. Pikemen and musketeers combined', 'C. Cavalry and infantry', 'D. Naval tactic'],
            correct: 'B',
            explanation: 'Pike and shot were combined formations of pikemen (defense against cavalry, close combat) and musketeers (firepower at range) that dominated Renaissance battlefields.'
        },
        {
            id: 'Q4',
            question: 'What was the Thirty Years War (1618-1648)?',
            options: ['A. Trade dispute', 'B. Religious war devastating central Europe', 'C. Crusade', 'D. Dynastic conflict only'],
            correct: 'B',
            explanation: 'The Thirty Years War was a devastating religious conflict in central Europe that involved most major powers and saw further development of gunpowder warfare and professional armies.'
        },
        {
            id: 'Q5',
            question: 'What did Gustavus Adolphus contribute?',
            options: ['A. Traditional tactics', 'B. Mobile artillery and combined arms', 'C. Bigger castles', 'D. More knights'],
            correct: 'B',
            explanation: 'Gustavus Adolphus of Sweden contributed mobile light artillery, improved combined arms coordination, and innovative tactics that influenced military development across Europe.'
        },
        {
            id: 'Q6',
            question: 'What was the Battle of Breitenfeld (1631)?',
            options: ['A. Swedish defeat', 'B. Swedish military innovation proven', 'C. Religious peace', 'D. Naval battle'],
            correct: 'B',
            explanation: 'Breitenfeld proved Swedish military effectiveness under Gustavus Adolphus, showing how improved artillery, disciplined musketry, and tactical flexibility could defeat traditional forces.'
        },
        {
            id: 'Q7',
            question: 'What changed about fortifications in the Renaissance?',
            options: ['A. Castles became taller', 'B. Trace italienne with star-shaped bastions', 'C. No changes', 'D. Only moats added'],
            correct: 'B',
            explanation: 'Renaissance fortifications used the trace italienne design—star-shaped bastions projecting from main walls to provide overlapping fields of fire and resist cannon bombardment.'
        },
        {
            id: 'Q8',
            question: 'What was the role of cavalry in this period?',
            options: ['A. Dominant as before', 'B. Specialized support roles', 'C. No longer used', 'D. Only reconnaissance'],
            correct: 'B',
            explanation: 'Cavalry lost dominance but remained valuable for reconnaissance, pursuit of defeated enemies, and flanking attacks. They became specialists rather than the main battle-winning force.'
        },
        {
            id: 'Q9',
            question: 'What increased in Renaissance warfare?',
            options: ['A. Smaller armies', 'B. Larger armies and increased cost', 'C. Cheaper wars', 'D. Less professional'],
            correct: 'B',
            explanation: 'Armies grew larger as states mobilized more resources, and wars became increasingly expensive due to the cost of firearms, artillery, fortifications, and professional soldiers.'
        },
        {
            id: 'Q10',
            question: 'What was the Dutch Revolt significance?',
            options: ['A. Religious conflict only', 'B. Early modern revolution and military innovation', 'C. Trade war', 'D. Civil war'],
            correct: 'B',
            explanation: 'The Dutch Revolt against Spanish rule was an early modern revolution and saw military innovations (Maurice of Nassau\'s reforms) proving how smaller, well-trained forces could defeat larger traditional armies.'
        },
        {
            id: 'Q11',
            question: 'What improved with Renaissance siege warfare?',
            options: ['A. Reliance on starvation only', 'B. Systematic engineering and artillery', 'C. Only scaling ladders', 'D. Diplomacy'],
            correct: 'B',
            explanation: 'Renaissance siege warfare became more systematic with better engineering approaches, massive artillery bombardments, and coordinated infantry assaults on fortresses.'
        },
        {
            id: 'Q12',
            question: 'What happened to the feudal knight?',
            options: ['A. Became stronger', 'B. Transformed into aristocratic officer class', 'C. Completely disappeared', 'D. Joined infantry'],
            correct: 'B',
            explanation: 'The feudal knight transformed. As a battlefield fighting class, armored cavalry declined. Knights and nobility increasingly became officers commanding professional armies rather than fighting themselves.'
        }
    ],

    // MODULE 6: LINEAR TACTICS
    linearTactics: [
        {
            id: 'Q1',
            question: 'What was the linear tactical formation?',
            options: ['A. Deep columns', 'B. Two or three lines of infantry', 'C. Circle formation', 'D. Scattered skirmish'],
            correct: 'B',
            explanation: 'Linear tactics involved deploying infantry in two or three thin lines several ranks deep, maximizing firepower to create zones of deadly fire against attacking forces.'
        },
        {
            id: 'Q2',
            question: 'What made linear warfare possible?',
            options: ['A. Better swords', 'B. Improved firearms with higher rate of fire', 'C. More horses', 'D. Taller formations'],
            correct: 'B',
            explanation: 'Improved firearms with higher rates of fire and better reliability made linear warfare possible. Thin lines could deliver devastating continuous volleys.'
        },
        {
            id: 'Q3',
            question: 'What role did Frederick the Great play?',
            options: ['A. Opposed innovation', 'B. Perfected linear tactics and oblique order', 'C. Used deep columns', 'D. Navies only'],
            correct: 'B',
            explanation: 'Frederick the Great of Prussia perfected linear tactics and developed the oblique order—concentrating force against one enemy flank while demonstrating elsewhere to win battles against larger opponents.'
        },
        {
            id: 'Q4',
            question: 'What was the oblique order?',
            options: ['A. Direct frontal attack', 'B. Attack enemy flank with strongest forces', 'C. Retreat in good order', 'D. Encirclement tactic'],
            correct: 'B',
            explanation: 'The oblique order involved attacking an enemy flank with concentrated strong forces while defensively refusing the flank, allowing a smaller army to defeat a larger one at a decisive point.'
        },
        {
            id: 'Q5',
            question: 'What was the Seven Years War significance?',
            options: ['A. Religious conflict', 'B. First truly global war', 'C. Trade dispute', 'D. Civil war'],
            correct: 'B',
            explanation: 'The Seven Years War (1756-1763) was the first truly global conflict, fought in Europe, North America, India, and at sea, establishing Prussia as a major power and showcasing linear warfare.'
        },
        {
            id: 'Q6',
            question: 'What characterized 18th-century warfare?',
            options: ['A. Total war', 'B. Limited wars, careful strategy, decisive battle seeking', 'C. Religious crusades', 'D. Peasant rebellions'],
            correct: 'B',
            explanation: 'Eighteenth-century warfare typically involved limited wars with careful maneuver and strategy, seeking decisive battles rather than total annihilation of enemies or occupation of territory.'
        },
        {
            id: 'Q7',
            question: 'What was the role of artillery in linear warfare?',
            options: ['A. Secondary', 'B. Integrated in lines and massed for breakthrough', 'C. Replaced infantry', 'D. Only for sieges'],
            correct: 'B',
            explanation: 'Artillery was integrated between infantry in the line and also massed for concentrated fire. Cannon could blast gaps in enemy lines or provide defensive fire.'
        },
        {
            id: 'Q8',
            question: 'What was light infantry\'s role?',
            options: ['A. Main battle line', 'B. Skirmishing, screening, harassing', 'C. Artillery support', 'D. Cavalry replacement'],
            correct: 'B',
            explanation: 'Light infantry served as skirmishers ahead of the main line, screening movements, harassing enemy formations, and occupying terrain features.'
        },
        {
            id: 'Q9',
            question: 'What was the American Revolutionary War significance?',
            options: ['A. Traditional linear warfare', 'B. Irregular tactics showing limitations of linear formations', 'C. Religious war', 'D. Civil war'],
            correct: 'B',
            explanation: 'The American Revolutionary War demonstrated limitations of linear warfare when facing irregular tactics used by American militia fighting from behind cover rather than in the open.'
        },
        {
            id: 'Q10',
            question: 'What was the War of Austrian Succession?',
            options: ['A. Religious war', 'B. European power struggle with limited objectives', 'C. World war', 'D. Trade war'],
            correct: 'B',
            explanation: 'The War of Austrian Succession (1740-1748) was a European power struggle over the succession and territories, typical of 18th-century limited wars.'
        },
        {
            id: 'Q11',
            question: 'What was the strength of linear tactics?',
            options: ['A. Flexibility', 'B. Firepower and controlled volley fire', 'C. Cheap', 'D. Easy to learn'],
            correct: 'B',
            explanation: 'The strength of linear tactics was firepower—controlled volley fire from disciplined formations delivered devastating casualties at ranges melee weapons could not match.'
        },
        {
            id: 'Q12',
            question: 'What was a weakness of linear tactics?',
            options: ['A. Too much firepower', 'B. Inflexibility and vulnerability to flanking', 'C. Too complex', 'D. Too expensive'],
            correct: 'B',
            explanation: 'Linear tactics were relatively inflexible. Vulnerable to flanking attacks, and once committed to engagement, reforming lines was difficult. Required flat terrain and disciplined troops.'
        }
    ],

    // MODULE 7: NAPOLEONIC WARFARE
    napoleonic: [
        {
            id: 'Q1',
            question: 'What was the corps d\'armee?',
            options: ['A. Napoleon\'s name', 'B. Self-contained formation combining all arms', 'C. Cavalry only', 'D. Elite infantry only'],
            correct: 'B',
            explanation: 'The corps d\'armee was Napoleon\'s basic organizational unit—a self-contained formation combining infantry, cavalry, and artillery that could operate independently for extended periods.'
        },
        {
            id: 'Q2',
            question: 'What was the advantage of marching dispersed?',
            options: ['A. Easier to supply', 'B. Speed and ability to concentrate for battle', 'C. Look more impressive', 'D. Less fatigue'],
            correct: 'B',
            explanation: 'Marching dispersed on different roads allowed faster movement and reduced foraging strain, then rapid concentration for battle as needed—march separately, fight together.'
        },
        {
            id: 'Q3',
            question: 'What was the grand battery?',
            options: ['A. Large cavalry formation', 'B. Massed artillery concentration', 'C. Elite infantry unit', 'D. Supply depot'],
            correct: 'B',
            explanation: 'The grand battery was a massed concentration of artillery designed to blast holes in enemy lines, create breaches for infantry exploitation, or demoralize enemy formations.'
        },
        {
            id: 'Q4',
            question: 'What battle was Napoleon\'s tactical masterpiece?',
            options: ['A. Waterloo', 'B. Austerlitz', 'C. Borodino', 'D. Leipzig'],
            correct: 'B',
            explanation: 'Austerlitz (1805) was Napoleon\'s tactical masterpiece. He deliberately weakened his right to tempt Allied attack there, then struck the center with a crushing blow, nearly destroying the Allied army.'
        },
        {
            id: 'Q5',
            question: 'What was central position strategy?',
            options: ['A. Fighting from the middle of the map', 'B. Interposing between separated enemy forces', 'C. Defending the capital', 'D. Attacking the center only'],
            correct: 'B',
            explanation: 'Central position involved placing your army between separated enemy forces, then defeating each in detail by rapidly moving against one before the other could reinforce.'
        },
        {
            id: 'Q6',
            question: 'What caused disaster in the 1812 Russian campaign?',
            options: ['A. Better Russian weapons', 'B. Extended distances and scorched earth logistics', 'C. French incompetence', 'D. Russian winter alone'],
            correct: 'B',
            explanation: 'Disaster resulted from extended distances stretching supply lines beyond capacity and Russian scorched earth tactics depriving the army of forage, compounded by winter weather.'
        },
        {
            id: 'Q7',
            question: 'What was the Imperial Guard?',
            options: ['A. Police force', 'B. Elite veteran formation reserved for critical moments', 'C. Conscripts', 'D. Artillery branch'],
            correct: 'B',
            explanation: 'The Imperial Guard was Napoleon\'s elite formation of veteran troops held in reserve and committed only at critical moments. Their presence could turn defeat into victory.'
        },
        {
            id: 'Q8',
            question: 'What was the levee en masse?',
            options: ['A. Artillery piece', 'B. Revolutionary mass conscription', 'C. Cavalry charge', 'D. Surrender tactic'],
            correct: 'B',
            explanation: 'The levee en masse was revolutionary mass conscription that mobilized entire male populations for military service, allowing France to field unprecedentedly large armies.'
        },
        {
            id: 'Q9',
            question: 'What was the Peninsular War?',
            options: ['A. Victory for Napoleon', 'B. "Ulcer" war in Spain draining France', 'C. Naval battle', 'D. Religious war'],
            correct: 'B',
            explanation: 'The Peninsular War was the "ulcer" that steadily drained French resources. British and Portuguese forces under Wellington, aided by Spanish guerrillas, tied down hundreds of thousands of French troops.'
        },
        {
            id: 'Q10',
            question: 'What ended Napoleonic dominance at Leipzig?',
            options: ['A. Tactical mistake', 'B. Coalition overwhelming numbers', 'C. Treason', 'D. Disease'],
            correct: 'B',
            explanation: 'Leipzig (1813) was the Battle of Nations. Napoleon faced overwhelming coalition forces. Despite battlefield skill, the sheer numbers and coordination of Allied armies defeated him.'
        },
        {
            id: 'Q11',
            question: 'What was Waterloo\'s significance?',
            options: ['A. Minor skirmish', 'B. Final decisive defeat ending Napoleonic era', 'C. Napoleon\'s greatest victory', 'D. Inconclusive'],
            correct: 'B',
            explanation: 'Waterloo (1815) was Napoleon\'s final defeat and ended the Napoleonic era. A coalition of Britain, Prussia, Austria, and Russia had mobilized, and battlefield defeat ended the Hundred Days.'
        },
        {
            id: 'Q12',
            question: 'What was Napoleon\'s legacy regarding operational art?',
            options: ['A. Static warfare', 'B. Rapid maneuver and strategic concentration', 'C. Defensive only', 'D. No lasting influence'],
            correct: 'B',
            explanation: 'Napoleon\'s legacy was demonstrating operational art—coordinating multiple corps for rapid maneuver and strategic concentration at decisive points, influencing military thought for generations.'
        }
    ],

    // MODULE 8: NAVAL WARFARE
    naval: [
        {
            id: 'Q1',
            question: 'What was a trireme?',
            options: ['A. Square-rigged ship', 'B. Ancient galley with three banks of oars', 'C. Cannon ship', 'D. Steam ship'],
            correct: 'B',
            explanation: 'A trireme was an ancient Greek warship with three banks of oars on each side, capable of high speeds and maneuverability. It was the standard classical warship.'
        },
        {
            id: 'Q2',
            question: 'What was the primary tactic of triremes?',
            options: ['A. Boarding', 'B. Ramming', 'C. Fire weapons', 'D. Long-range missiles'],
            correct: 'B',
            explanation: 'Triremes primarily used ramming tactics, striking enemy ships with their bronze ram at the prow to sink them or disable them. Boarding was secondary.'
        },
        {
            id: 'Q3',
            question: 'What established Athenian naval supremacy?',
            options: ['A. Marathon', 'B. Salamis', 'C. Thermopylae', 'D. Platea'],
            correct: 'B',
            explanation: 'The Battle of Salamis (480 BCE) established Athenian naval supremacy. The Greek fleet lured the larger Persian navy into narrow straits where Greek maneuverability prevailed.'
        },
        {
            id: 'Q4',
            question: 'What is the line of battle?',
            options: ['A. Single file line', 'B. Ships formed in single line to present broadsides', 'C. Defensive circle', 'D. Wedge formation'],
            correct: 'B',
            explanation: 'The line of battle was a standard formation where ships formed in a single line to present broadsides to the enemy while protecting vulnerable sides, maximizing firepower.'
        },
        {
            id: 'Q5',
            question: 'What was a broadside?',
            options: ['A. Ship type', 'B. Firing all guns on one side simultaneously', 'C. Maneuver', 'D. Flag signal'],
            correct: 'B',
            explanation: 'A broadside meant firing all guns on one side of the ship simultaneously, concentrating firepower and forming the basis of age of sail tactics.'
        },
        {
            id: 'Q6',
            question: 'What was Nelson\'s tactical innovation?',
            options: ['A. Standard line', 'B. Breaking the enemy line', 'C. Defensive tactics', 'D. Night attacks only'],
            correct: 'B',
            explanation: 'Nelson innovated by breaking the enemy line rather than fighting parallel to it. By cutting through enemy formations, he engaged isolated segments and destroyed them in detail.'
        },
        {
            id: 'Q7',
            question: 'What battle demonstrated Nelson\'s innovation?',
            options: ['A. Battle of the Nile', 'B. Trafalgar', 'C. Copenhagen', 'D. Cape St Vincent'],
            correct: 'B',
            explanation: 'Trafalgar (1805) fully demonstrated Nelson\'s innovation. Breaking the Franco-Spanish line, he captured or destroyed 22 ships and ended Napoleonic naval ambitions.'
        },
        {
            id: 'Q8',
            question: 'What was the wind gauge?',
            options: ['A. Measurement device', 'B. Being upwind of the enemy (tactical advantage)', 'C. Speed indicator', 'D. Weather forecast'],
            correct: 'B',
            explanation: 'Holding the wind gauge meant being upwind of the enemy. This gave the advantage of choosing whether to attack or disengage, as ships had greater freedom of maneuver with favorable wind.'
        },
        {
            id: 'Q9',
            question: 'What were ships of the line?',
            options: ['A. Transport ships', 'B. Heaviest warships for battle line', 'C. Scout vessels', 'D. Supply ships'],
            correct: 'B',
            explanation: 'Ships of the line were the heaviest warships, carrying 50-100+ guns, designed to fight in the line of battle for fleet engagements. They were the capital ships of their era.'
        },
        {
            id: 'Q10',
            question: 'What was the Spanish Armada (1588) significance?',
            options: ['A. Spanish victory', 'B. End of Spanish naval supremacy', 'C. Minor skirmish', 'D. English defeat'],
            correct: 'B',
            explanation: 'The defeat of the Spanish Armada marked the end of Spanish naval supremacy and the beginning of England\'s rise as a major naval power.'
        },
        {
            id: 'Q11',
            question: 'What was commerce raiding?',
            options: ['A. Trade protection', 'B. Attacking enemy merchant shipping', 'C. Blockading ports', 'D. Fleet battle'],
            correct: 'B',
            explanation: 'Commerce raiding involved attacking enemy merchant shipping to disrupt trade and economic activity, weakening the enemy\'s economy and resources rather than seeking fleet battles.'
        },
        {
            id: 'Q12',
            question: 'What was strategic in naval warfare?',
            options: ['A. Only big battles', 'B. Control of sea lanes, blockade, protection of trade', 'C. Ship types only', 'D. Flag signals'],
            correct: 'B',
            explanation: 'Strategic naval warfare concerned controlling sea lanes, blockading enemy ports, protecting friendly trade, and using naval power to support land operations, not just winning battles.'
        }
    ]
};

// Final Examination Questions
const finalExamQuestions = [
    {
        id: 'F1',
        question: 'What is the fundamental nature of war?',
        options: ['A. Random violence', 'B. Organized violence for political ends', 'C. Sport and competition', 'D. Diplomacy\'s alternative'],
        correct: 'B',
        explanation: 'War is fundamentally organized violence applied by groups to achieve political objectives. The three key elements are organization, violence, and purpose.'
    },
    {
        id: 'F2',
        question: 'According to Sun Tzu, what is the supreme excellence?',
        options: ['A. Winning every battle', 'B. Subduing the enemy without fighting', 'C. Having the largest army', 'D. Defending fortifications'],
        correct: 'B',
        explanation: 'Sun Tzu teaches that the highest excellence is subduing the enemy without fighting. Victory without combat is safest and most economical.'
    },
    {
        id: 'F3',
        question: 'What does the principle of the objective require?',
        options: ['A. Fight everywhere', 'B. Clear achievable goals', 'C. No goals needed', 'D. Surprise'],
        correct: 'B',
        explanation: 'The principle of the objective demands clearly defined, decisive, and attainable goals. Every military action must serve specific, worthwhile objectives.'
    },
    {
        id: 'F4',
        question: 'What made the phalanx effective?',
        options: ['A. Individual heroism', 'B. Mutual protection shield wall and offensive push', 'C. Random charging', 'D. Only officers'],
        correct: 'B',
        explanation: 'The phalanx was effective because overlapping shields protected soldiers and the formation could push forward with combined strength while presenting spear points.'
    },
    {
        id: 'F5',
        question: 'What was the Roman manipular system?',
        options: ['A. Single line like phalanx', 'B. Flexible formation of independent units', 'C. Cavalry only', 'D. Defensive only'],
        correct: 'B',
        explanation: 'The manipular system divided the legion into maniples that could maneuver independently. This flexibility was a key advantage over the more rigid phalanx.'
    },
    {
        id: 'F6',
        question: 'What did gunpowder do to medieval warfare?',
        options: ['A. No effect', 'B. Undermined feudalism and transformed fortifications', 'C. Strengthened knights', 'D. Made war cheaper'],
        correct: 'B',
        explanation: 'Gunpowder undermined feudal military structures by making castles vulnerable to cannon and knights increasingly obsolete, driving armies toward professionalization.'
    },
    {
        id: 'F7',
        question: 'What was the Spanish tercio?',
        options: ['A. Cavalry formation', 'B. Combined pike arquebus sword formation', 'C. Artillery unit', 'D. Garrison troops'],
        correct: 'B',
        explanation: 'The tercio combined pikemen, arquebusiers, and swordsmen in mutually supporting formations, dominating European battlefields for a century by combining firearms with close protection.'
    },
    {
        id: 'F8',
        question: 'What was linear warfare?',
        options: ['A. Deep columns', 'B. Thin lines for maximizing volley firepower', 'C. Circle formation', 'D. Skirmish'],
        correct: 'B',
        explanation: 'Linear warfare deployed infantry in two or three thin lines to maximize controlled volley fire, creating deadly zones that would shatter attacking formations.'
    },
    {
        id: 'F9',
        question: 'What was Napoleon\'s corps d\'armee?',
        options: ['A. Elite guard', 'B. Independent all-arms formation', 'C. Artillery battery', 'D. Cavalry unit'],
        correct: 'B',
        explanation: 'The corps was Napoleon\'s basic unit, a self-contained formation combining infantry, cavalry, and artillery that could operate independently and then concentrate for battle.'
    },
    {
        id: 'F10',
        question: 'What was Central Position?',
        options: ['A. Defensive strategy', 'B. Interpose between separated enemy forces', 'C. Attacking the center', 'D. Retreating to center'],
        correct: 'B',
        explanation: 'Central position involved placing your army between separated enemy forces, then defeating each in detail by rapid movement—a classic Napoleonic operational art.'
    },
    {
        id: 'F11',
        question: 'What was the broadside in naval warfare?',
        options: ['A. Ship side', 'B. Firing all guns on one side simultaneously', 'C. Flag signal', 'D. Ship type'],
        correct: 'B',
        explanation: 'A broadside meant firing all guns on one side simultaneously, concentrating firepower—a key concept in age of sail naval tactics.'
    },
    {
        id: 'F12',
        question: 'What did Nelson do at Trafalgar?',
        options: ['A. Fleed', 'B. Broke the enemy line', 'C. Defensive tactics', 'D. Surrendered'],
        correct: 'B',
        explanation: 'Nelson broke the Franco-Spanish line at Trafalgar, cutting through to engage isolated segments and destroy them, ending Napoleonic naval ambitions.'
    },
    {
        id: 'F13',
        question: 'What does unity of command mean?',
        options: ['A. Many commanders', 'B. Single authority over operations', 'C. No commander', 'D. Democratic decision'],
        correct: 'B',
        explanation: 'Unity of command means one commander has authority over all participating forces, preventing coordination problems and ensuring unity of effort.'
    },
    {
        id: 'F14',
        question: 'What does economy of force mean?',
        options: ['A. Save money', 'B. Minimal forces on secondary tasks', 'C. Use only elite troops', 'D. No reserves'],
        correct: 'B',
        explanation: 'Economy of force means allocating no more force to secondary tasks than necessary, preserving maximum strength for the main effort.'
    },
    {
        id: 'F15',
        question: 'What does center of gravity mean?',
        options: ['A. Geographic center', 'B. Source of power giving enemy strength', 'C. Artillery', 'D. Capital city'],
        correct: 'B',
        explanation: 'Center of gravity represents the source of power giving an enemy strength—could be leadership, morale, industry, armed forces, etc. It must be identified and targeted.'
    },
    {
        id: 'F16',
        question: 'What was the strategic significance of the Peloponnesian War?',
        options: ['A. Trade dispute', 'B. Fear of rising power causing war', 'C. Religious conflict', 'D. Minor affair'],
        correct: 'B',
        explanation: 'Thucydides identified that the war began because Spartans feared growing Athenian power—a pattern repeated throughout history when rising powers challenge established ones.'
    },
    {
        id: 'F17',
        question: 'What changed with professional standing armies?',
        options: ['A. Nothing', 'B. Better training skill and sustained operations', 'C. Worse soldiers', 'D. Less reliable'],
        correct: 'B',
        explanation: 'Professional standing armies brought better training, higher skill levels, and the ability to sustain campaign operations—a major change from feudal levies or citizen militias.'
    },
    {
        id: 'F18',
        question: 'What was the trace italienne?',
        options: ['A. Flag design', 'B. Low thick angled fortress walls resisting cannon', 'C. Cavalry formation', 'D. Naval tactic'],
        correct: 'B',
        explanation: 'The trace italienne was the modern fortress design with low, thick, angular walls and projecting bastions designed to resist cannon bombardment and provide overlapping defensive fire.'
    },
    {
        id: 'F19',
        question: 'What was the oblique order?',
        options: ['A. Direct attack', 'B. Attack enemy flank with concentrated force', 'C. Defensive tactic', 'D. Encirclement'],
        correct: 'B',
        explanation: 'The oblique order involved concentrating forces against one enemy flank while refusing the other flank. This allowed a smaller army to defeat a larger one at a decisive point.'
    },
    {
        id: 'F20',
        question: 'What distinguished Napoleonic warfare?',
        options: ['A. Static defenses', 'B. Rapid maneuver and strategic concentration', 'C. More archers', 'D. Fewer battles'],
        correct: 'B',
        explanation: 'Napoleonic warfare was characterized by rapid maneuver using dispersed corps that could concentrate quickly for battle, plus operational art in planning and coordinating movements.'
    },
    {
        id: 'F21',
        question: 'What strategic factors determine war?',
        options: ['A. Only weapons', 'B. Politics objectives resources and human factors', 'C. Only terrain', 'D. Only numbers'],
        correct: 'B',
        explanation: 'War is determined by political objectives, available resources, geography and terrain, leadership quality, morale, training, and numerous human factors—not just weapons or numbers.'
    },
    {
        id: 'F22',
        question: 'What connects all eras of warfare?',
        options: ['A. Same weapons', 'B. Enduring principles like surprise concentration and morale', 'C. Same formations', 'D. Same technology'],
        correct: 'B',
        explanation: 'While weapons and formations change across eras, enduring strategic principles connect all warfare: the need for clear objectives, the advantage of surprise, the power of concentration, the importance of morale.'
    },
    {
        id: 'F23',
        question: 'Why study ancient military history?',
        options: ['A. Only for entertainment', 'B. Lessons in human nature and strategic principles', 'C. Outdated information', 'D. No value'],
        correct: 'B',
        explanation: 'Ancient military history teaches lessons about human nature, psychology, leadership, and strategic principles that transcend technology—all relevant to understanding modern conflict.'
    },
    {
        id: 'F24',
        question: 'What do successful commanders share across eras?',
        options: ['A. Same nationality', 'B. Understanding of strategic principles and human factors', 'C. Same weapons', 'D. Same luck'],
        correct: 'B',
        explanation: 'Successful commanders across all eras share an understanding of strategic principles, human psychology, the ability to adapt to circumstances, sound judgment, and effective leadership.'
    },
    {
        id: 'F25',
        question: 'What is the relationship between strategy and tactics?',
        options: ['A. Same thing', 'B. Strategy guides overall aims, tactics implements in battle', 'C. Tactics guide strategy', 'D. Unrelated'],
        correct: 'B',
        explanation: 'Strategy concerns overall aims and using military means to achieve political objectives. Tactics concerns winning specific battles and engagements. Good strategy requires effective tactics to achieve its aims.'
    }
];

function renderQuiz(quizContainerId, questions) {
    const container = document.getElementById(quizContainerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    const quizDiv = document.createElement('div');
    quizDiv.className = 'quiz-container';
    
    const title = document.createElement('div');
    title.className = 'quiz-title';
    title.textContent = 'Module Quiz';
    quizDiv.appendChild(title);
    
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'quiz-question';
        
        const questionText = document.createElement('p');
        questionText.textContent = `${index + 1}. ${q.question}`;
        questionDiv.appendChild(questionText);
        
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'quiz-options';
        
        q.options.forEach(option => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'quiz-option';
            optionDiv.textContent = option;
            optionDiv.onclick = function() {
                const allOptions = optionsDiv.querySelectorAll('.quiz-option');
                allOptions.forEach(opt => opt.classList.remove('selected'));
                this.classList.add('selected');
                quizManager.recordAnswer(q.id, option.charAt(0));
            };
            optionsDiv.appendChild(optionDiv);
        });
        
        questionDiv.appendChild(optionsDiv);
        quizDiv.appendChild(questionDiv);
    });
    
    const submitBtn = document.createElement('button');
    submitBtn.className = 'submit-btn';
    submitBtn.textContent = 'Submit Quiz';
    submitBtn.style.width = '100%';
    submitBtn.onclick = function() {
        const correctAnswers = {};
        questions.forEach(q => {
            correctAnswers[q.id] = q.correct;
        });
        
        quizManager.initQuiz('module', questions);
        const result = quizManager.submitQuiz(correctAnswers);
        
        let resultsHTML = '<div class="exam-results" style="margin-top: 30px; padding: 30px;">';
        resultsHTML += `<h3>Score: ${result.score}/${result.total} (${result.percentage}%)</h3>`;
        
        if (result.percentage >= 70) {
            resultsHTML += '<p class="text-bold" style="color: var(--success); margin-bottom: 20px;">Congratulations! You have passed this module.</p>';
            markQuizPassed(parseInt(quizContainerId.match(/\d+/)[0]));
        } else {
            resultsHTML += '<p class="text-bold" style="color: var(--error); margin-bottom: 20px;">Below passing threshold (70%). Please review and retake.</p>';
        }
        
        resultsHTML += '<ul style="text-align: left; margin-top: 20px;">';
        result.results.forEach(r => {
            resultsHTML += `<li style="margin: 10px 0;">${r}</li>`;
        });
        resultsHTML += '</ul>';
        
        result.results.forEach(r => {
            const question = questions[parseInt(r.match(/\d+/)[0]) - 1];
            if (question && r.includes('Incorrect')) {
                resultsHTML += `<div style="margin: 15px 0; padding: 15px; background: var(--error-light); border-left: 4px solid var(--error); border-radius: 5px;">`;
                resultsHTML += `<strong style="color: var(--error);">Explanation:</strong> ${question.explanation}`;
                resultsHTML += '</div>';
            }
        });
        
        resultsHTML += '</div>';
        
        const feedbackDiv = document.createElement('div');
        feedbackDiv.id = 'quiz-feedback';
        feedbackDiv.innerHTML = resultsHTML;
        quizDiv.appendChild(feedbackDiv);
    };
    
    quizDiv.appendChild(submitBtn);
    container.appendChild(quizDiv);
}