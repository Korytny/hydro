import { motion } from 'framer-motion';

export default function ProductCard({ product, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative overflow-hidden rounded-2xl border border-glass-border bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.06] hover:border-cyan-accent/30 hover:-translate-y-1"
    >
      {/* Shine border */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-cyan-accent/10 to-transparent animate-shimmer" />
      </div>

      {/* Badge */}
      <div className="absolute top-4 right-4 z-10 rounded-full border border-cyan-accent/30 bg-cyan-accent/10 px-3 py-1 text-xs font-semibold text-cyan-accent backdrop-blur-sm">
        {product.badge}
      </div>

      {/* Product image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-ocean/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium text-white/40 uppercase tracking-wider">{product.material}</span>
          <span className="text-xs font-medium text-cyan-accent">{product.volume}</span>
        </div>
        <h3 className="text-xl font-semibold text-white">{product.name}</h3>
        <p className="mt-1 text-sm text-white/50">{product.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-white/50">
          {product.description}
        </p>

        <ul className="mt-4 space-y-2">
          {product.features.map((feat) => (
            <li key={feat} className="flex items-center gap-2 text-sm text-white/60">
              <span className="h-1 w-1 rounded-full bg-cyan-accent" />
              {feat}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
