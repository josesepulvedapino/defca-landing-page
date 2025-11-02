












































































































































"use client"

import { Leaf, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t border-border/60">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary-foreground" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">DEFCA</span>
                <span className="text-xs text-muted-foreground">Sistema de gestión fitosanitario</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tecnología inteligente para la detección de enfermedades foliares en cultivos de avellano.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Secciones</h3>
            <ul className="space-y-2">
              {[
                { label: "Inicio", href: "#hero" },
                { label: "Problema", href: "#problem" },
                { label: "Solución", href: "#solution" },
                { label: "Características", href: "#features" },
                { label: "Acceso", href: "#cta" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Team */}
          <div>
            <h3 className="font-semibold mb-4">Equipo</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Linkedin className="w-4 h-4 text-primary mt-0.5" />
                <div className="flex flex-col">
                  <a
                    href="https://www.linkedin.com/in/josesepulvedapino/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    José Sepúlveda
                  </a>
                  <span className="text-xs text-muted-foreground">Co-fundador & Desarrollador</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Linkedin className="w-4 h-4 text-primary mt-0.5" />
                <div className="flex flex-col">
                  <a
                    href="https://www.linkedin.com/in/luis-eduardo-soto-guti%C3%A9rrez-99a53a256/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    Luis Soto
                  </a>
                  <span className="text-xs text-muted-foreground">Co-fundador & Desarrollador</span>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <a
                  href="mailto:contacto@defca.app"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  contacto@defca.app
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} DEFCA. Desarrollado en Chile para el campo.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted-foreground">Región de Ñuble</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
