

```typescript
`PetGenApp.strategy.ts`
```ts
/**
 * Enum representing all available strategies for pet generation in the PetGenApp
 * Based on API structure from petgen.rf.gd/api/app.js and rest.js
 */
export enum PetGenerationStrategy {
  /**
   * Basic random pet generation with minimal constraints
   */
  BASIC_RANDOM = 'basic_random',
  
  /**
   * Game-specific strategy with balanced attributes
   */
  GAME_BALANCED = 'game_balanced',
  
  /**
   * Strategy focused on visual aesthetics
   */
  VISUAL_BEAUTY = 'visual_beauty',
  
  /**
   * Strategy that emphasizes rare traits
   */
  RARE_TRAITS = 'rare_traits',
  
  /**
   * Strategy optimized for augmented reality features
   */
  AR_OPTIMIZED = 'ar_optimized',
  
  /**
   * Strategy that creates pets optimized for NFT generation
   */
  NFT_OPTIMIZED = 'nft_optimized',
  
  /**
   * Strategy that creates realistic looking pets
   */
  HYPER_REALISTIC = 'hyper_realistic',
  
  /**
   * Beginner-friendly simplified strategy
   */
  BEGINNER_MODE = 'beginner_mode',
  
  /**
   * Strategy that creates pets matching specific themes
   */
  THEME_SPECIFIC = 'theme_specific',
  
  /**
   * Strategy using genetic algorithms for evolution
   */
  GENETIC_ALGORITHM = 'genetic_algorithm'
}

/**
 * Type guard for PetGenerationStrategy
 */
export function isPetGenerationStrategy(strategy: string): strategy is PetGenerationStrategy {
  return Object.values(PetGenerationStrategy).includes(strategy as PetGenerationStrategy);
}

/**
 * Gets the display name for a strategy
 */
export function getStrategyDisplayName(strategy: PetGenerationStrategy): string {
  const names = {
    [PetGenerationStrategy.BASIC_RANDOM]: 'Random',
    [PetGenerationStrategy.GAME_BALANCED]: 'Game Balanced',
    [PetGenerationStrategy.VISUAL_BEAUTY]: 'Visual Beauty',
    [PetGenerationStrategy.RARE_TRAITS]: 'Rare Traits',
    [PetGenerationStrategy.AR_OPTIMIZED]: 'AR Optimized',
    [PetGenerationStrategy.NFT_OPTIMIZED]: 'NFT Ready',
    [PetGenerationStrategy.HYPER_REALISTIC]: 'Hyper Realistic',
    [PetGenerationStrategy.BEGINNER_MODE]: 'Beginner Mode',
    [PetGenerationStrategy.THEME_SPECIFIC]: 'Theme Specific',
    [PetGenerationStrategy.GENETIC_ALGORITHM]: 'Genetic Algorithm'
  };
  return names[strategy] || strategy;
}

/**
 * Default strategy to use when none is specified
 */
export const DEFAULT_STRATEGY = PetGenerationStrategy.BASIC_RANDOM;

// API-related utilities
export interface GenerationRequest {
  strategy: PetGenerationStrategy;
  options?: Record<string, any>;
}

/**
 * Creates a generation request body for the API
 */
export function createGenerationRequest(strategy: PetGenerationStrategy, options?: object): GenerationRequest {
  return {
    strategy,
    options
  };
}

/**
 * Validates a strategy before sending to the API
 */
export function validateStrategy(strategy: string): string {
  return isPetGenerationStrategy(strategy) ? strategy : DEFAULT_STRATEGY;
}

```