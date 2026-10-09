// ===== Builds the page from content.js. You normally never edit this part. =====
(function () {
  var C = window.CONTENT,
    P = C.profile;
  function $(id) {
    return document.getElementById(id);
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[c];
    });
  }
  function url(u) {
    return /^(https?:\/\/|mailto:)/i.test(u || "") ? u : "";
  }
  function isPdf(u) {
    return (
      /\.pdf($|[?#])/i.test(u || "") || /^data:application\/pdf/i.test(u || "")
    );
  }
  function initials(n) {
    return n
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map(function (w) {
        return w[0].toUpperCase();
      })
      .join("");
  }
  document.title = P.name + " | " + P.role;
  $("navName").textContent = P.name;
  $("footName").textContent = P.name;
  $("headline").textContent = P.headline;
  $("intro").textContent = P.intro;
  $("bio").innerHTML = P.bio
    .map(function (t) {
      return "<p>" + esc(t) + "</p>";
    })
    .join("");
  $("photoBox").innerHTML =
    (P.photo
      ? '<img src="' + esc(P.photo) + '" alt="Photo of ' + esc(P.name) + '">'
      : '<div class="ph" role="img" aria-label="Photo placeholder">' +
        esc(initials(P.name)) +
        "</div>") +
    "<figcaption><b>" +
    esc(P.name) +
    "</b>" +
    esc(P.role) +
    "</figcaption>";
  $("status").textContent = P.status;
  $("city").textContent = P.location;
  $("skillList").innerHTML = C.skills
    .map(function (s, i) {
      var f = [
        ["What is it?", s.what],
        ["Why does it matter?", s.why],
        ["Real world", s.real],
        ["How I use it", s.use],
      ];
      return (
        '<details class="reveal"' +
        (i === 0 ? " open" : "") +
        "><summary>" +
        esc(s.title) +
        '</summary><div class="dbody">' +
        f
          .map(function (x) {
            return "<div><h4>" + x[0] + "</h4><p>" + esc(x[1]) + "</p></div>";
          })
          .join("") +
        "</div></details>"
      );
    })
    .join("");
  $("projectList").innerHTML = C.projects
    .map(function (p) {
      return (
        '<article class="project reveal"><h3>' +
        esc(p.title) +
        "</h3><p>" +
        esc(p.text) +
        '</p><ul class="tags">' +
        p.tags
          .map(function (t) {
            return "<li>" + esc(t) + "</li>";
          })
          .join("") +
        "</ul></article>"
      );
    })
    .join("");
  $("certList").innerHTML = C.certificates
    .map(function (c, i) {
      var f = c.file || c.image,
        pic = c.image || (f && !isPdf(f) ? f : "");
      var img = pic
        ? '<img src="' + esc(pic) + '" alt="' + esc(c.title) + ' certificate">'
        : isPdf(f)
          ? '<span class="pdf-badge">PDF<br><small>certificate</small></span>'
          : "No certificate yet<br>";
      var v = url(c.link)
        ? ' <a href="' +
          esc(c.link) +
          '" target="_blank" rel="noopener">Verify</a>'
        : "";
      var done = c.status !== "progress";
      return (
        '<article class="cert reveal" data-i="' +
        i +
        '" role="button" tabindex="0" aria-label="Open ' +
        esc(c.title) +
        '"><div class="frame">' +
        img +
        "</div><h3>" +
        esc(c.title) +
        "</h3><p>" +
        esc(c.issuer) +
        (c.year ? ", " + esc(c.year) : "") +
        v +
        '</p><span class="badge' +
        (done ? " done" : "") +
        '">' +
        (done ? "Completed" : "In progress") +
        "</span></article>"
      );
    })
    .join("");
  $("journeyList").innerHTML = C.journey
    .map(function (j) {
      return (
        '<li class="reveal"><time>' +
        esc(j.when) +
        "</time><h3>" +
        esc(j.title) +
        "</h3><p>" +
        esc(j.text) +
        "</p></li>"
      );
    })
    .join("");
  $("contactText").textContent = C.contact.text;
  $("contactBtns").innerHTML = C.contact.links
    .filter(function (l) {
      return url(l.url);
    })
    .map(function (l, i) {
      return (
        '<a class="btn' +
        (i ? " alt" : "") +
        '" href="' +
        esc(l.url) +
        '" ' +
        (l.url.indexOf("mailto:") === 0
          ? ""
          : 'target="_blank" rel="noopener" ') +
        ">" +
        esc(l.label) +
        "</a>"
      );
    })
    .join("");
})();

// Caesar cipher demo
var msg = document.getElementById("msg"),
  out = document.getElementById("out"),
  sh = document.getElementById("shift"),
  sv = document.getElementById("sv");
function enc() {
  var k = +sh.value;
  sv.textContent = k;
  out.textContent = msg.value.replace(/[a-z]/gi, function (c) {
    var b = c <= "Z" ? 65 : 97;
    return String.fromCharCode(((c.charCodeAt(0) - b + k) % 26) + b);
  });
}
msg.addEventListener("input", enc);
sh.addEventListener("input", enc);
enc();

// Scroll reveal from the bottom
var items = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  var io = new IntersectionObserver(
    function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15 },
  );
  items.forEach(function (el) {
    io.observe(el);
  });
} else {
  items.forEach(function (el) {
    el.classList.add("in");
  });
}

// Smooth open and close for the learning cards
document.querySelectorAll("#skills details").forEach(function (d) {
  var s = d.querySelector("summary"),
    anim = null,
    ease = "cubic-bezier(.2,.7,.2,1)";
  function run(from, to, done) {
    if (anim) anim.cancel();
    anim = d.animate(
      { height: [from + "px", to + "px"] },
      { duration: 480, easing: ease },
    );
    anim.onfinish = function () {
      anim = null;
      d.style.height = "";
      done();
    };
    anim.oncancel = function () {
      anim = null;
    };
  }
  s.addEventListener("click", function (e) {
    e.preventDefault();
    var from = d.offsetHeight;
    if (!d.open || d.classList.contains("closing")) {
      d.classList.remove("closing");
      d.open = true;
      run(from, d.scrollHeight + 2, function () {});
    } else {
      d.classList.add("closing");
      run(from, s.offsetHeight + 2, function () {
        d.open = false;
        d.classList.remove("closing");
      });
    }
  });
});

// Project cards open the link given in content.js
var projectLinks = CONTENT.projects.map(function (p) {
  return p.link || "";
});
var toast = document.getElementById("toast"),
  toastTimer;
function showToast(m) {
  toast.textContent = m;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () {
    toast.classList.remove("show");
  }, 3200);
}
document.querySelectorAll(".project").forEach(function (card, i) {
  card.setAttribute("role", "link");
  card.tabIndex = 0;
  function go() {
    var u = (projectLinks[i] || "").trim();
    if (!u) {
      showToast("No link is connected to this project yet.");
      return;
    }
    if (!/^https?:\/\//i.test(u)) {
      showToast("This project link is not a valid web address.");
      return;
    }
    var w = window.open(u, "_blank", "noopener");
    if (!w) {
      showToast(
        "Your browser blocked the new tab. Please allow pop-ups and try again.",
      );
    }
  }
  card.addEventListener("click", go);
  card.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      go();
    }
  });
});

// Theme toggle (kept in memory only)
document.getElementById("theme").addEventListener("click", function () {
  var r = document.documentElement,
    dark = matchMedia("(prefers-color-scheme: dark)").matches;
  var cur = r.getAttribute("data-theme") || (dark ? "dark" : "light");
  r.setAttribute("data-theme", cur === "dark" ? "light" : "dark");
});
document.getElementById("yr").textContent = new Date().getFullYear();

// Certificate viewer: open with click, Enter or Space; close with the x button, Esc or a click outside
(function () {
  var lb = document.getElementById("lightbox"),
    media = document.getElementById("lbMedia"),
    title = document.getElementById("lbTitle"),
    meta = document.getElementById("lbMeta"),
    act = document.getElementById("lbActions"),
    closeBtn = document.getElementById("lbClose"),
    opener = null;
  function link(cls, href, text, extra) {
    var a = document.createElement("a");
    a.className = cls;
    a.href = href;
    a.textContent = text;
    if (extra) extra(a);
    act.appendChild(a);
  }
  function open(i, from) {
    var c = CONTENT.certificates[i];
    opener = from;
    media.textContent = "";
    var f = c.file || c.image,
      pdf =
        /\.pdf($|[?#])/i.test(f || "") ||
        /^data:application\/pdf/i.test(f || "");
    media.classList.toggle("is-pdf", pdf);
    if (pdf) {
      var fr = document.createElement("iframe");
      fr.src = f;
      fr.title = c.title + " (PDF)";
      media.appendChild(fr);
    } else if (f) {
      var im = document.createElement("img");
      im.src = f;
      im.alt = c.title + " certificate";
      media.appendChild(im);
    } else {
      media.textContent = "No certificate file has been added yet.";
    }
    title.textContent = c.title;
    meta.textContent =
      c.issuer +
      (c.year ? ", " + c.year : "") +
      (c.status === "progress" ? " (in progress)" : "");
    act.textContent = "";
    if (/^https?:\/\//i.test(c.link || "")) {
      link("btn", c.link, "Verify online", function (a) {
        a.target = "_blank";
        a.rel = "noopener";
      });
    }
    if (pdf) {
      link("btn alt", f, "Open PDF in a new tab", function (a) {
        a.target = "_blank";
        a.rel = "noopener";
      });
    }
    if (c.download && f) {
      var ext = pdf
        ? "pdf"
        : (f.match(/^data:image\/(\w+)/) || f.match(/\.(\w+)$/) || [])[1] ||
          "png";
      link("btn alt", f, "Download", function (a) {
        a.download = c.title.replace(/\W+/g, "-") + "." + ext;
      });
    }
    lb.classList.add("open");
    lb.setAttribute("aria-hidden", "false");
    document.body.classList.add("lb-lock");
    closeBtn.focus();
  }
  function close() {
    lb.classList.remove("open");
    lb.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lb-lock");
    if (opener) opener.focus();
  }
  var list = document.getElementById("certList");
  list.addEventListener("click", function (e) {
    var card = e.target.closest(".cert");
    if (!card || e.target.closest("a")) return;
    open(+card.getAttribute("data-i"), card);
  });
  list.addEventListener("keydown", function (e) {
    if (
      (e.key === "Enter" || e.key === " ") &&
      e.target.classList.contains("cert")
    ) {
      e.preventDefault();
      open(+e.target.getAttribute("data-i"), e.target);
    }
  });
  closeBtn.addEventListener("click", close);
  lb.addEventListener("click", function (e) {
    if (e.target === lb) close();
  });
  document.addEventListener("keydown", function (e) {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") {
      close();
      return;
    }
    if (e.key === "Tab") {
      var f = lb.querySelectorAll("a[href],button");
      if (!f.length) return;
      var first = f[0],
        last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
})();
