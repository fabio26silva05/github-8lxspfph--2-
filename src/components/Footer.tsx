import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="py-10 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Logo Imagem */}
          <div className="flex items-center gap-2">
            <img 
              src="/vaptia-logo.png" 
              alt="Vaptia" 
              className="h-10 w-auto object-contain mix-blend-multiply" 
            />
          </div>

          {/* Copyright */}
          <p className="text-sm text-body">
            © 2024 Vaptia Soluções. Todos os direitos reservados.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href="#"
              className="text-body hover:text-primary transition-colors duration-200"
            >
              Termos de Uso
            </a>
            <a
              href="#"
              className="text-body hover:text-primary transition-colors duration-200"
            >
              Política de Privacidade
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
