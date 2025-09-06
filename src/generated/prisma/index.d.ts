
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Surah
 * 
 */
export type Surah = $Result.DefaultSelection<Prisma.$SurahPayload>
/**
 * Model Ayat
 * 
 */
export type Ayat = $Result.DefaultSelection<Prisma.$AyatPayload>
/**
 * Model Hadits
 * 
 */
export type Hadits = $Result.DefaultSelection<Prisma.$HaditsPayload>
/**
 * Model DetailHadits
 * 
 */
export type DetailHadits = $Result.DefaultSelection<Prisma.$DetailHaditsPayload>
/**
 * Model AsmaulHusna
 * 
 */
export type AsmaulHusna = $Result.DefaultSelection<Prisma.$AsmaulHusnaPayload>
/**
 * Model NiatSholat
 * 
 */
export type NiatSholat = $Result.DefaultSelection<Prisma.$NiatSholatPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Surahs
 * const surahs = await prisma.surah.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Surahs
   * const surahs = await prisma.surah.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.surah`: Exposes CRUD operations for the **Surah** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Surahs
    * const surahs = await prisma.surah.findMany()
    * ```
    */
  get surah(): Prisma.SurahDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ayat`: Exposes CRUD operations for the **Ayat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ayats
    * const ayats = await prisma.ayat.findMany()
    * ```
    */
  get ayat(): Prisma.AyatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hadits`: Exposes CRUD operations for the **Hadits** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hadits
    * const hadits = await prisma.hadits.findMany()
    * ```
    */
  get hadits(): Prisma.HaditsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detailHadits`: Exposes CRUD operations for the **DetailHadits** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetailHadits
    * const detailHadits = await prisma.detailHadits.findMany()
    * ```
    */
  get detailHadits(): Prisma.DetailHaditsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.asmaulHusna`: Exposes CRUD operations for the **AsmaulHusna** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AsmaulHusnas
    * const asmaulHusnas = await prisma.asmaulHusna.findMany()
    * ```
    */
  get asmaulHusna(): Prisma.AsmaulHusnaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.niatSholat`: Exposes CRUD operations for the **NiatSholat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NiatSholats
    * const niatSholats = await prisma.niatSholat.findMany()
    * ```
    */
  get niatSholat(): Prisma.NiatSholatDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Surah: 'Surah',
    Ayat: 'Ayat',
    Hadits: 'Hadits',
    DetailHadits: 'DetailHadits',
    AsmaulHusna: 'AsmaulHusna',
    NiatSholat: 'NiatSholat'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "surah" | "ayat" | "hadits" | "detailHadits" | "asmaulHusna" | "niatSholat"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Surah: {
        payload: Prisma.$SurahPayload<ExtArgs>
        fields: Prisma.SurahFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SurahFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SurahFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload>
          }
          findFirst: {
            args: Prisma.SurahFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SurahFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload>
          }
          findMany: {
            args: Prisma.SurahFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload>[]
          }
          create: {
            args: Prisma.SurahCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload>
          }
          createMany: {
            args: Prisma.SurahCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SurahCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload>[]
          }
          delete: {
            args: Prisma.SurahDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload>
          }
          update: {
            args: Prisma.SurahUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload>
          }
          deleteMany: {
            args: Prisma.SurahDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SurahUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SurahUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload>[]
          }
          upsert: {
            args: Prisma.SurahUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload>
          }
          aggregate: {
            args: Prisma.SurahAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSurah>
          }
          groupBy: {
            args: Prisma.SurahGroupByArgs<ExtArgs>
            result: $Utils.Optional<SurahGroupByOutputType>[]
          }
          count: {
            args: Prisma.SurahCountArgs<ExtArgs>
            result: $Utils.Optional<SurahCountAggregateOutputType> | number
          }
        }
      }
      Ayat: {
        payload: Prisma.$AyatPayload<ExtArgs>
        fields: Prisma.AyatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AyatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AyatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyatPayload>
          }
          findFirst: {
            args: Prisma.AyatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AyatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyatPayload>
          }
          findMany: {
            args: Prisma.AyatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyatPayload>[]
          }
          create: {
            args: Prisma.AyatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyatPayload>
          }
          createMany: {
            args: Prisma.AyatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AyatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyatPayload>[]
          }
          delete: {
            args: Prisma.AyatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyatPayload>
          }
          update: {
            args: Prisma.AyatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyatPayload>
          }
          deleteMany: {
            args: Prisma.AyatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AyatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AyatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyatPayload>[]
          }
          upsert: {
            args: Prisma.AyatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyatPayload>
          }
          aggregate: {
            args: Prisma.AyatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAyat>
          }
          groupBy: {
            args: Prisma.AyatGroupByArgs<ExtArgs>
            result: $Utils.Optional<AyatGroupByOutputType>[]
          }
          count: {
            args: Prisma.AyatCountArgs<ExtArgs>
            result: $Utils.Optional<AyatCountAggregateOutputType> | number
          }
        }
      }
      Hadits: {
        payload: Prisma.$HaditsPayload<ExtArgs>
        fields: Prisma.HaditsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HaditsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HaditsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HaditsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HaditsPayload>
          }
          findFirst: {
            args: Prisma.HaditsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HaditsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HaditsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HaditsPayload>
          }
          findMany: {
            args: Prisma.HaditsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HaditsPayload>[]
          }
          create: {
            args: Prisma.HaditsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HaditsPayload>
          }
          createMany: {
            args: Prisma.HaditsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HaditsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HaditsPayload>[]
          }
          delete: {
            args: Prisma.HaditsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HaditsPayload>
          }
          update: {
            args: Prisma.HaditsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HaditsPayload>
          }
          deleteMany: {
            args: Prisma.HaditsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HaditsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HaditsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HaditsPayload>[]
          }
          upsert: {
            args: Prisma.HaditsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HaditsPayload>
          }
          aggregate: {
            args: Prisma.HaditsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHadits>
          }
          groupBy: {
            args: Prisma.HaditsGroupByArgs<ExtArgs>
            result: $Utils.Optional<HaditsGroupByOutputType>[]
          }
          count: {
            args: Prisma.HaditsCountArgs<ExtArgs>
            result: $Utils.Optional<HaditsCountAggregateOutputType> | number
          }
        }
      }
      DetailHadits: {
        payload: Prisma.$DetailHaditsPayload<ExtArgs>
        fields: Prisma.DetailHaditsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetailHaditsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailHaditsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetailHaditsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailHaditsPayload>
          }
          findFirst: {
            args: Prisma.DetailHaditsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailHaditsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetailHaditsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailHaditsPayload>
          }
          findMany: {
            args: Prisma.DetailHaditsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailHaditsPayload>[]
          }
          create: {
            args: Prisma.DetailHaditsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailHaditsPayload>
          }
          createMany: {
            args: Prisma.DetailHaditsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DetailHaditsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailHaditsPayload>[]
          }
          delete: {
            args: Prisma.DetailHaditsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailHaditsPayload>
          }
          update: {
            args: Prisma.DetailHaditsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailHaditsPayload>
          }
          deleteMany: {
            args: Prisma.DetailHaditsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetailHaditsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DetailHaditsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailHaditsPayload>[]
          }
          upsert: {
            args: Prisma.DetailHaditsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailHaditsPayload>
          }
          aggregate: {
            args: Prisma.DetailHaditsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetailHadits>
          }
          groupBy: {
            args: Prisma.DetailHaditsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetailHaditsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetailHaditsCountArgs<ExtArgs>
            result: $Utils.Optional<DetailHaditsCountAggregateOutputType> | number
          }
        }
      }
      AsmaulHusna: {
        payload: Prisma.$AsmaulHusnaPayload<ExtArgs>
        fields: Prisma.AsmaulHusnaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AsmaulHusnaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsmaulHusnaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AsmaulHusnaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsmaulHusnaPayload>
          }
          findFirst: {
            args: Prisma.AsmaulHusnaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsmaulHusnaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AsmaulHusnaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsmaulHusnaPayload>
          }
          findMany: {
            args: Prisma.AsmaulHusnaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsmaulHusnaPayload>[]
          }
          create: {
            args: Prisma.AsmaulHusnaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsmaulHusnaPayload>
          }
          createMany: {
            args: Prisma.AsmaulHusnaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AsmaulHusnaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsmaulHusnaPayload>[]
          }
          delete: {
            args: Prisma.AsmaulHusnaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsmaulHusnaPayload>
          }
          update: {
            args: Prisma.AsmaulHusnaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsmaulHusnaPayload>
          }
          deleteMany: {
            args: Prisma.AsmaulHusnaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AsmaulHusnaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AsmaulHusnaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsmaulHusnaPayload>[]
          }
          upsert: {
            args: Prisma.AsmaulHusnaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsmaulHusnaPayload>
          }
          aggregate: {
            args: Prisma.AsmaulHusnaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsmaulHusna>
          }
          groupBy: {
            args: Prisma.AsmaulHusnaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AsmaulHusnaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AsmaulHusnaCountArgs<ExtArgs>
            result: $Utils.Optional<AsmaulHusnaCountAggregateOutputType> | number
          }
        }
      }
      NiatSholat: {
        payload: Prisma.$NiatSholatPayload<ExtArgs>
        fields: Prisma.NiatSholatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NiatSholatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NiatSholatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NiatSholatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NiatSholatPayload>
          }
          findFirst: {
            args: Prisma.NiatSholatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NiatSholatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NiatSholatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NiatSholatPayload>
          }
          findMany: {
            args: Prisma.NiatSholatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NiatSholatPayload>[]
          }
          create: {
            args: Prisma.NiatSholatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NiatSholatPayload>
          }
          createMany: {
            args: Prisma.NiatSholatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NiatSholatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NiatSholatPayload>[]
          }
          delete: {
            args: Prisma.NiatSholatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NiatSholatPayload>
          }
          update: {
            args: Prisma.NiatSholatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NiatSholatPayload>
          }
          deleteMany: {
            args: Prisma.NiatSholatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NiatSholatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NiatSholatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NiatSholatPayload>[]
          }
          upsert: {
            args: Prisma.NiatSholatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NiatSholatPayload>
          }
          aggregate: {
            args: Prisma.NiatSholatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNiatSholat>
          }
          groupBy: {
            args: Prisma.NiatSholatGroupByArgs<ExtArgs>
            result: $Utils.Optional<NiatSholatGroupByOutputType>[]
          }
          count: {
            args: Prisma.NiatSholatCountArgs<ExtArgs>
            result: $Utils.Optional<NiatSholatCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    surah?: SurahOmit
    ayat?: AyatOmit
    hadits?: HaditsOmit
    detailHadits?: DetailHaditsOmit
    asmaulHusna?: AsmaulHusnaOmit
    niatSholat?: NiatSholatOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SurahCountOutputType
   */

  export type SurahCountOutputType = {
    ayat: number
  }

  export type SurahCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ayat?: boolean | SurahCountOutputTypeCountAyatArgs
  }

  // Custom InputTypes
  /**
   * SurahCountOutputType without action
   */
  export type SurahCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurahCountOutputType
     */
    select?: SurahCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SurahCountOutputType without action
   */
  export type SurahCountOutputTypeCountAyatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AyatWhereInput
  }


  /**
   * Count Type HaditsCountOutputType
   */

  export type HaditsCountOutputType = {
    details: number
  }

  export type HaditsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    details?: boolean | HaditsCountOutputTypeCountDetailsArgs
  }

  // Custom InputTypes
  /**
   * HaditsCountOutputType without action
   */
  export type HaditsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HaditsCountOutputType
     */
    select?: HaditsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HaditsCountOutputType without action
   */
  export type HaditsCountOutputTypeCountDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailHaditsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Surah
   */

  export type AggregateSurah = {
    _count: SurahCountAggregateOutputType | null
    _avg: SurahAvgAggregateOutputType | null
    _sum: SurahSumAggregateOutputType | null
    _min: SurahMinAggregateOutputType | null
    _max: SurahMaxAggregateOutputType | null
  }

  export type SurahAvgAggregateOutputType = {
    id: number | null
    sequence: number | null
    number_of_verses: number | null
  }

  export type SurahSumAggregateOutputType = {
    id: number | null
    sequence: number | null
    number_of_verses: number | null
  }

  export type SurahMinAggregateOutputType = {
    id: number | null
    sequence: number | null
    number_of_verses: number | null
    name_short: string | null
    name_long: string | null
    name_en: string | null
    name_id: string | null
    translation_en: string | null
    translation_id: string | null
    revelation: string | null
    revelation_en: string | null
    revelation_id: string | null
    tafsir: string | null
    audio_url: string | null
  }

  export type SurahMaxAggregateOutputType = {
    id: number | null
    sequence: number | null
    number_of_verses: number | null
    name_short: string | null
    name_long: string | null
    name_en: string | null
    name_id: string | null
    translation_en: string | null
    translation_id: string | null
    revelation: string | null
    revelation_en: string | null
    revelation_id: string | null
    tafsir: string | null
    audio_url: string | null
  }

  export type SurahCountAggregateOutputType = {
    id: number
    sequence: number
    number_of_verses: number
    name_short: number
    name_long: number
    name_en: number
    name_id: number
    translation_en: number
    translation_id: number
    revelation: number
    revelation_en: number
    revelation_id: number
    tafsir: number
    audio_url: number
    _all: number
  }


  export type SurahAvgAggregateInputType = {
    id?: true
    sequence?: true
    number_of_verses?: true
  }

  export type SurahSumAggregateInputType = {
    id?: true
    sequence?: true
    number_of_verses?: true
  }

  export type SurahMinAggregateInputType = {
    id?: true
    sequence?: true
    number_of_verses?: true
    name_short?: true
    name_long?: true
    name_en?: true
    name_id?: true
    translation_en?: true
    translation_id?: true
    revelation?: true
    revelation_en?: true
    revelation_id?: true
    tafsir?: true
    audio_url?: true
  }

  export type SurahMaxAggregateInputType = {
    id?: true
    sequence?: true
    number_of_verses?: true
    name_short?: true
    name_long?: true
    name_en?: true
    name_id?: true
    translation_en?: true
    translation_id?: true
    revelation?: true
    revelation_en?: true
    revelation_id?: true
    tafsir?: true
    audio_url?: true
  }

  export type SurahCountAggregateInputType = {
    id?: true
    sequence?: true
    number_of_verses?: true
    name_short?: true
    name_long?: true
    name_en?: true
    name_id?: true
    translation_en?: true
    translation_id?: true
    revelation?: true
    revelation_en?: true
    revelation_id?: true
    tafsir?: true
    audio_url?: true
    _all?: true
  }

  export type SurahAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Surah to aggregate.
     */
    where?: SurahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surahs to fetch.
     */
    orderBy?: SurahOrderByWithRelationInput | SurahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SurahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Surahs
    **/
    _count?: true | SurahCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SurahAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SurahSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SurahMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SurahMaxAggregateInputType
  }

  export type GetSurahAggregateType<T extends SurahAggregateArgs> = {
        [P in keyof T & keyof AggregateSurah]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSurah[P]>
      : GetScalarType<T[P], AggregateSurah[P]>
  }




  export type SurahGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SurahWhereInput
    orderBy?: SurahOrderByWithAggregationInput | SurahOrderByWithAggregationInput[]
    by: SurahScalarFieldEnum[] | SurahScalarFieldEnum
    having?: SurahScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SurahCountAggregateInputType | true
    _avg?: SurahAvgAggregateInputType
    _sum?: SurahSumAggregateInputType
    _min?: SurahMinAggregateInputType
    _max?: SurahMaxAggregateInputType
  }

  export type SurahGroupByOutputType = {
    id: number
    sequence: number
    number_of_verses: number
    name_short: string
    name_long: string
    name_en: string
    name_id: string
    translation_en: string
    translation_id: string
    revelation: string
    revelation_en: string
    revelation_id: string
    tafsir: string
    audio_url: string
    _count: SurahCountAggregateOutputType | null
    _avg: SurahAvgAggregateOutputType | null
    _sum: SurahSumAggregateOutputType | null
    _min: SurahMinAggregateOutputType | null
    _max: SurahMaxAggregateOutputType | null
  }

  type GetSurahGroupByPayload<T extends SurahGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SurahGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SurahGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SurahGroupByOutputType[P]>
            : GetScalarType<T[P], SurahGroupByOutputType[P]>
        }
      >
    >


  export type SurahSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sequence?: boolean
    number_of_verses?: boolean
    name_short?: boolean
    name_long?: boolean
    name_en?: boolean
    name_id?: boolean
    translation_en?: boolean
    translation_id?: boolean
    revelation?: boolean
    revelation_en?: boolean
    revelation_id?: boolean
    tafsir?: boolean
    audio_url?: boolean
    ayat?: boolean | Surah$ayatArgs<ExtArgs>
    _count?: boolean | SurahCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["surah"]>

  export type SurahSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sequence?: boolean
    number_of_verses?: boolean
    name_short?: boolean
    name_long?: boolean
    name_en?: boolean
    name_id?: boolean
    translation_en?: boolean
    translation_id?: boolean
    revelation?: boolean
    revelation_en?: boolean
    revelation_id?: boolean
    tafsir?: boolean
    audio_url?: boolean
  }, ExtArgs["result"]["surah"]>

  export type SurahSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sequence?: boolean
    number_of_verses?: boolean
    name_short?: boolean
    name_long?: boolean
    name_en?: boolean
    name_id?: boolean
    translation_en?: boolean
    translation_id?: boolean
    revelation?: boolean
    revelation_en?: boolean
    revelation_id?: boolean
    tafsir?: boolean
    audio_url?: boolean
  }, ExtArgs["result"]["surah"]>

  export type SurahSelectScalar = {
    id?: boolean
    sequence?: boolean
    number_of_verses?: boolean
    name_short?: boolean
    name_long?: boolean
    name_en?: boolean
    name_id?: boolean
    translation_en?: boolean
    translation_id?: boolean
    revelation?: boolean
    revelation_en?: boolean
    revelation_id?: boolean
    tafsir?: boolean
    audio_url?: boolean
  }

  export type SurahOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sequence" | "number_of_verses" | "name_short" | "name_long" | "name_en" | "name_id" | "translation_en" | "translation_id" | "revelation" | "revelation_en" | "revelation_id" | "tafsir" | "audio_url", ExtArgs["result"]["surah"]>
  export type SurahInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ayat?: boolean | Surah$ayatArgs<ExtArgs>
    _count?: boolean | SurahCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SurahIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SurahIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SurahPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Surah"
    objects: {
      ayat: Prisma.$AyatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sequence: number
      number_of_verses: number
      name_short: string
      name_long: string
      name_en: string
      name_id: string
      translation_en: string
      translation_id: string
      revelation: string
      revelation_en: string
      revelation_id: string
      tafsir: string
      audio_url: string
    }, ExtArgs["result"]["surah"]>
    composites: {}
  }

  type SurahGetPayload<S extends boolean | null | undefined | SurahDefaultArgs> = $Result.GetResult<Prisma.$SurahPayload, S>

  type SurahCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SurahFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SurahCountAggregateInputType | true
    }

  export interface SurahDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Surah'], meta: { name: 'Surah' } }
    /**
     * Find zero or one Surah that matches the filter.
     * @param {SurahFindUniqueArgs} args - Arguments to find a Surah
     * @example
     * // Get one Surah
     * const surah = await prisma.surah.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SurahFindUniqueArgs>(args: SelectSubset<T, SurahFindUniqueArgs<ExtArgs>>): Prisma__SurahClient<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Surah that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SurahFindUniqueOrThrowArgs} args - Arguments to find a Surah
     * @example
     * // Get one Surah
     * const surah = await prisma.surah.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SurahFindUniqueOrThrowArgs>(args: SelectSubset<T, SurahFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SurahClient<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Surah that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurahFindFirstArgs} args - Arguments to find a Surah
     * @example
     * // Get one Surah
     * const surah = await prisma.surah.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SurahFindFirstArgs>(args?: SelectSubset<T, SurahFindFirstArgs<ExtArgs>>): Prisma__SurahClient<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Surah that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurahFindFirstOrThrowArgs} args - Arguments to find a Surah
     * @example
     * // Get one Surah
     * const surah = await prisma.surah.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SurahFindFirstOrThrowArgs>(args?: SelectSubset<T, SurahFindFirstOrThrowArgs<ExtArgs>>): Prisma__SurahClient<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Surahs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurahFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Surahs
     * const surahs = await prisma.surah.findMany()
     * 
     * // Get first 10 Surahs
     * const surahs = await prisma.surah.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const surahWithIdOnly = await prisma.surah.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SurahFindManyArgs>(args?: SelectSubset<T, SurahFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Surah.
     * @param {SurahCreateArgs} args - Arguments to create a Surah.
     * @example
     * // Create one Surah
     * const Surah = await prisma.surah.create({
     *   data: {
     *     // ... data to create a Surah
     *   }
     * })
     * 
     */
    create<T extends SurahCreateArgs>(args: SelectSubset<T, SurahCreateArgs<ExtArgs>>): Prisma__SurahClient<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Surahs.
     * @param {SurahCreateManyArgs} args - Arguments to create many Surahs.
     * @example
     * // Create many Surahs
     * const surah = await prisma.surah.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SurahCreateManyArgs>(args?: SelectSubset<T, SurahCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Surahs and returns the data saved in the database.
     * @param {SurahCreateManyAndReturnArgs} args - Arguments to create many Surahs.
     * @example
     * // Create many Surahs
     * const surah = await prisma.surah.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Surahs and only return the `id`
     * const surahWithIdOnly = await prisma.surah.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SurahCreateManyAndReturnArgs>(args?: SelectSubset<T, SurahCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Surah.
     * @param {SurahDeleteArgs} args - Arguments to delete one Surah.
     * @example
     * // Delete one Surah
     * const Surah = await prisma.surah.delete({
     *   where: {
     *     // ... filter to delete one Surah
     *   }
     * })
     * 
     */
    delete<T extends SurahDeleteArgs>(args: SelectSubset<T, SurahDeleteArgs<ExtArgs>>): Prisma__SurahClient<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Surah.
     * @param {SurahUpdateArgs} args - Arguments to update one Surah.
     * @example
     * // Update one Surah
     * const surah = await prisma.surah.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SurahUpdateArgs>(args: SelectSubset<T, SurahUpdateArgs<ExtArgs>>): Prisma__SurahClient<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Surahs.
     * @param {SurahDeleteManyArgs} args - Arguments to filter Surahs to delete.
     * @example
     * // Delete a few Surahs
     * const { count } = await prisma.surah.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SurahDeleteManyArgs>(args?: SelectSubset<T, SurahDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Surahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurahUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Surahs
     * const surah = await prisma.surah.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SurahUpdateManyArgs>(args: SelectSubset<T, SurahUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Surahs and returns the data updated in the database.
     * @param {SurahUpdateManyAndReturnArgs} args - Arguments to update many Surahs.
     * @example
     * // Update many Surahs
     * const surah = await prisma.surah.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Surahs and only return the `id`
     * const surahWithIdOnly = await prisma.surah.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SurahUpdateManyAndReturnArgs>(args: SelectSubset<T, SurahUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Surah.
     * @param {SurahUpsertArgs} args - Arguments to update or create a Surah.
     * @example
     * // Update or create a Surah
     * const surah = await prisma.surah.upsert({
     *   create: {
     *     // ... data to create a Surah
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Surah we want to update
     *   }
     * })
     */
    upsert<T extends SurahUpsertArgs>(args: SelectSubset<T, SurahUpsertArgs<ExtArgs>>): Prisma__SurahClient<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Surahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurahCountArgs} args - Arguments to filter Surahs to count.
     * @example
     * // Count the number of Surahs
     * const count = await prisma.surah.count({
     *   where: {
     *     // ... the filter for the Surahs we want to count
     *   }
     * })
    **/
    count<T extends SurahCountArgs>(
      args?: Subset<T, SurahCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SurahCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Surah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurahAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SurahAggregateArgs>(args: Subset<T, SurahAggregateArgs>): Prisma.PrismaPromise<GetSurahAggregateType<T>>

    /**
     * Group by Surah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurahGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SurahGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SurahGroupByArgs['orderBy'] }
        : { orderBy?: SurahGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SurahGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSurahGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Surah model
   */
  readonly fields: SurahFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Surah.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SurahClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ayat<T extends Surah$ayatArgs<ExtArgs> = {}>(args?: Subset<T, Surah$ayatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AyatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Surah model
   */
  interface SurahFieldRefs {
    readonly id: FieldRef<"Surah", 'Int'>
    readonly sequence: FieldRef<"Surah", 'Int'>
    readonly number_of_verses: FieldRef<"Surah", 'Int'>
    readonly name_short: FieldRef<"Surah", 'String'>
    readonly name_long: FieldRef<"Surah", 'String'>
    readonly name_en: FieldRef<"Surah", 'String'>
    readonly name_id: FieldRef<"Surah", 'String'>
    readonly translation_en: FieldRef<"Surah", 'String'>
    readonly translation_id: FieldRef<"Surah", 'String'>
    readonly revelation: FieldRef<"Surah", 'String'>
    readonly revelation_en: FieldRef<"Surah", 'String'>
    readonly revelation_id: FieldRef<"Surah", 'String'>
    readonly tafsir: FieldRef<"Surah", 'String'>
    readonly audio_url: FieldRef<"Surah", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Surah findUnique
   */
  export type SurahFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
    /**
     * Filter, which Surah to fetch.
     */
    where: SurahWhereUniqueInput
  }

  /**
   * Surah findUniqueOrThrow
   */
  export type SurahFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
    /**
     * Filter, which Surah to fetch.
     */
    where: SurahWhereUniqueInput
  }

  /**
   * Surah findFirst
   */
  export type SurahFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
    /**
     * Filter, which Surah to fetch.
     */
    where?: SurahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surahs to fetch.
     */
    orderBy?: SurahOrderByWithRelationInput | SurahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Surahs.
     */
    cursor?: SurahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Surahs.
     */
    distinct?: SurahScalarFieldEnum | SurahScalarFieldEnum[]
  }

  /**
   * Surah findFirstOrThrow
   */
  export type SurahFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
    /**
     * Filter, which Surah to fetch.
     */
    where?: SurahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surahs to fetch.
     */
    orderBy?: SurahOrderByWithRelationInput | SurahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Surahs.
     */
    cursor?: SurahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Surahs.
     */
    distinct?: SurahScalarFieldEnum | SurahScalarFieldEnum[]
  }

  /**
   * Surah findMany
   */
  export type SurahFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
    /**
     * Filter, which Surahs to fetch.
     */
    where?: SurahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surahs to fetch.
     */
    orderBy?: SurahOrderByWithRelationInput | SurahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Surahs.
     */
    cursor?: SurahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surahs.
     */
    skip?: number
    distinct?: SurahScalarFieldEnum | SurahScalarFieldEnum[]
  }

  /**
   * Surah create
   */
  export type SurahCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
    /**
     * The data needed to create a Surah.
     */
    data: XOR<SurahCreateInput, SurahUncheckedCreateInput>
  }

  /**
   * Surah createMany
   */
  export type SurahCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Surahs.
     */
    data: SurahCreateManyInput | SurahCreateManyInput[]
  }

  /**
   * Surah createManyAndReturn
   */
  export type SurahCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * The data used to create many Surahs.
     */
    data: SurahCreateManyInput | SurahCreateManyInput[]
  }

  /**
   * Surah update
   */
  export type SurahUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
    /**
     * The data needed to update a Surah.
     */
    data: XOR<SurahUpdateInput, SurahUncheckedUpdateInput>
    /**
     * Choose, which Surah to update.
     */
    where: SurahWhereUniqueInput
  }

  /**
   * Surah updateMany
   */
  export type SurahUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Surahs.
     */
    data: XOR<SurahUpdateManyMutationInput, SurahUncheckedUpdateManyInput>
    /**
     * Filter which Surahs to update
     */
    where?: SurahWhereInput
    /**
     * Limit how many Surahs to update.
     */
    limit?: number
  }

  /**
   * Surah updateManyAndReturn
   */
  export type SurahUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * The data used to update Surahs.
     */
    data: XOR<SurahUpdateManyMutationInput, SurahUncheckedUpdateManyInput>
    /**
     * Filter which Surahs to update
     */
    where?: SurahWhereInput
    /**
     * Limit how many Surahs to update.
     */
    limit?: number
  }

  /**
   * Surah upsert
   */
  export type SurahUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
    /**
     * The filter to search for the Surah to update in case it exists.
     */
    where: SurahWhereUniqueInput
    /**
     * In case the Surah found by the `where` argument doesn't exist, create a new Surah with this data.
     */
    create: XOR<SurahCreateInput, SurahUncheckedCreateInput>
    /**
     * In case the Surah was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SurahUpdateInput, SurahUncheckedUpdateInput>
  }

  /**
   * Surah delete
   */
  export type SurahDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
    /**
     * Filter which Surah to delete.
     */
    where: SurahWhereUniqueInput
  }

  /**
   * Surah deleteMany
   */
  export type SurahDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Surahs to delete
     */
    where?: SurahWhereInput
    /**
     * Limit how many Surahs to delete.
     */
    limit?: number
  }

  /**
   * Surah.ayat
   */
  export type Surah$ayatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayat
     */
    select?: AyatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayat
     */
    omit?: AyatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyatInclude<ExtArgs> | null
    where?: AyatWhereInput
    orderBy?: AyatOrderByWithRelationInput | AyatOrderByWithRelationInput[]
    cursor?: AyatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AyatScalarFieldEnum | AyatScalarFieldEnum[]
  }

  /**
   * Surah without action
   */
  export type SurahDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
  }


  /**
   * Model Ayat
   */

  export type AggregateAyat = {
    _count: AyatCountAggregateOutputType | null
    _avg: AyatAvgAggregateOutputType | null
    _sum: AyatSumAggregateOutputType | null
    _min: AyatMinAggregateOutputType | null
    _max: AyatMaxAggregateOutputType | null
  }

  export type AyatAvgAggregateOutputType = {
    id: number | null
    surah_number: number | null
    ayat_number: number | null
  }

  export type AyatSumAggregateOutputType = {
    id: number | null
    surah_number: number | null
    ayat_number: number | null
  }

  export type AyatMinAggregateOutputType = {
    id: number | null
    surah_number: number | null
    ayat_number: number | null
    arabic: string | null
    kitabah: string | null
    latin: string | null
    translation: string | null
  }

  export type AyatMaxAggregateOutputType = {
    id: number | null
    surah_number: number | null
    ayat_number: number | null
    arabic: string | null
    kitabah: string | null
    latin: string | null
    translation: string | null
  }

  export type AyatCountAggregateOutputType = {
    id: number
    surah_number: number
    ayat_number: number
    arabic: number
    kitabah: number
    latin: number
    translation: number
    _all: number
  }


  export type AyatAvgAggregateInputType = {
    id?: true
    surah_number?: true
    ayat_number?: true
  }

  export type AyatSumAggregateInputType = {
    id?: true
    surah_number?: true
    ayat_number?: true
  }

  export type AyatMinAggregateInputType = {
    id?: true
    surah_number?: true
    ayat_number?: true
    arabic?: true
    kitabah?: true
    latin?: true
    translation?: true
  }

  export type AyatMaxAggregateInputType = {
    id?: true
    surah_number?: true
    ayat_number?: true
    arabic?: true
    kitabah?: true
    latin?: true
    translation?: true
  }

  export type AyatCountAggregateInputType = {
    id?: true
    surah_number?: true
    ayat_number?: true
    arabic?: true
    kitabah?: true
    latin?: true
    translation?: true
    _all?: true
  }

  export type AyatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ayat to aggregate.
     */
    where?: AyatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ayats to fetch.
     */
    orderBy?: AyatOrderByWithRelationInput | AyatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AyatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ayats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ayats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ayats
    **/
    _count?: true | AyatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AyatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AyatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AyatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AyatMaxAggregateInputType
  }

  export type GetAyatAggregateType<T extends AyatAggregateArgs> = {
        [P in keyof T & keyof AggregateAyat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAyat[P]>
      : GetScalarType<T[P], AggregateAyat[P]>
  }




  export type AyatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AyatWhereInput
    orderBy?: AyatOrderByWithAggregationInput | AyatOrderByWithAggregationInput[]
    by: AyatScalarFieldEnum[] | AyatScalarFieldEnum
    having?: AyatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AyatCountAggregateInputType | true
    _avg?: AyatAvgAggregateInputType
    _sum?: AyatSumAggregateInputType
    _min?: AyatMinAggregateInputType
    _max?: AyatMaxAggregateInputType
  }

  export type AyatGroupByOutputType = {
    id: number
    surah_number: number
    ayat_number: number
    arabic: string
    kitabah: string
    latin: string
    translation: string
    _count: AyatCountAggregateOutputType | null
    _avg: AyatAvgAggregateOutputType | null
    _sum: AyatSumAggregateOutputType | null
    _min: AyatMinAggregateOutputType | null
    _max: AyatMaxAggregateOutputType | null
  }

  type GetAyatGroupByPayload<T extends AyatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AyatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AyatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AyatGroupByOutputType[P]>
            : GetScalarType<T[P], AyatGroupByOutputType[P]>
        }
      >
    >


  export type AyatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    surah_number?: boolean
    ayat_number?: boolean
    arabic?: boolean
    kitabah?: boolean
    latin?: boolean
    translation?: boolean
    surah?: boolean | SurahDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ayat"]>

  export type AyatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    surah_number?: boolean
    ayat_number?: boolean
    arabic?: boolean
    kitabah?: boolean
    latin?: boolean
    translation?: boolean
    surah?: boolean | SurahDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ayat"]>

  export type AyatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    surah_number?: boolean
    ayat_number?: boolean
    arabic?: boolean
    kitabah?: boolean
    latin?: boolean
    translation?: boolean
    surah?: boolean | SurahDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ayat"]>

  export type AyatSelectScalar = {
    id?: boolean
    surah_number?: boolean
    ayat_number?: boolean
    arabic?: boolean
    kitabah?: boolean
    latin?: boolean
    translation?: boolean
  }

  export type AyatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "surah_number" | "ayat_number" | "arabic" | "kitabah" | "latin" | "translation", ExtArgs["result"]["ayat"]>
  export type AyatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    surah?: boolean | SurahDefaultArgs<ExtArgs>
  }
  export type AyatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    surah?: boolean | SurahDefaultArgs<ExtArgs>
  }
  export type AyatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    surah?: boolean | SurahDefaultArgs<ExtArgs>
  }

  export type $AyatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ayat"
    objects: {
      surah: Prisma.$SurahPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      surah_number: number
      ayat_number: number
      arabic: string
      kitabah: string
      latin: string
      translation: string
    }, ExtArgs["result"]["ayat"]>
    composites: {}
  }

  type AyatGetPayload<S extends boolean | null | undefined | AyatDefaultArgs> = $Result.GetResult<Prisma.$AyatPayload, S>

  type AyatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AyatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AyatCountAggregateInputType | true
    }

  export interface AyatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ayat'], meta: { name: 'Ayat' } }
    /**
     * Find zero or one Ayat that matches the filter.
     * @param {AyatFindUniqueArgs} args - Arguments to find a Ayat
     * @example
     * // Get one Ayat
     * const ayat = await prisma.ayat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AyatFindUniqueArgs>(args: SelectSubset<T, AyatFindUniqueArgs<ExtArgs>>): Prisma__AyatClient<$Result.GetResult<Prisma.$AyatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ayat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AyatFindUniqueOrThrowArgs} args - Arguments to find a Ayat
     * @example
     * // Get one Ayat
     * const ayat = await prisma.ayat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AyatFindUniqueOrThrowArgs>(args: SelectSubset<T, AyatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AyatClient<$Result.GetResult<Prisma.$AyatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ayat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyatFindFirstArgs} args - Arguments to find a Ayat
     * @example
     * // Get one Ayat
     * const ayat = await prisma.ayat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AyatFindFirstArgs>(args?: SelectSubset<T, AyatFindFirstArgs<ExtArgs>>): Prisma__AyatClient<$Result.GetResult<Prisma.$AyatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ayat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyatFindFirstOrThrowArgs} args - Arguments to find a Ayat
     * @example
     * // Get one Ayat
     * const ayat = await prisma.ayat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AyatFindFirstOrThrowArgs>(args?: SelectSubset<T, AyatFindFirstOrThrowArgs<ExtArgs>>): Prisma__AyatClient<$Result.GetResult<Prisma.$AyatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ayats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ayats
     * const ayats = await prisma.ayat.findMany()
     * 
     * // Get first 10 Ayats
     * const ayats = await prisma.ayat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ayatWithIdOnly = await prisma.ayat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AyatFindManyArgs>(args?: SelectSubset<T, AyatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AyatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ayat.
     * @param {AyatCreateArgs} args - Arguments to create a Ayat.
     * @example
     * // Create one Ayat
     * const Ayat = await prisma.ayat.create({
     *   data: {
     *     // ... data to create a Ayat
     *   }
     * })
     * 
     */
    create<T extends AyatCreateArgs>(args: SelectSubset<T, AyatCreateArgs<ExtArgs>>): Prisma__AyatClient<$Result.GetResult<Prisma.$AyatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ayats.
     * @param {AyatCreateManyArgs} args - Arguments to create many Ayats.
     * @example
     * // Create many Ayats
     * const ayat = await prisma.ayat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AyatCreateManyArgs>(args?: SelectSubset<T, AyatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ayats and returns the data saved in the database.
     * @param {AyatCreateManyAndReturnArgs} args - Arguments to create many Ayats.
     * @example
     * // Create many Ayats
     * const ayat = await prisma.ayat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ayats and only return the `id`
     * const ayatWithIdOnly = await prisma.ayat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AyatCreateManyAndReturnArgs>(args?: SelectSubset<T, AyatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AyatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ayat.
     * @param {AyatDeleteArgs} args - Arguments to delete one Ayat.
     * @example
     * // Delete one Ayat
     * const Ayat = await prisma.ayat.delete({
     *   where: {
     *     // ... filter to delete one Ayat
     *   }
     * })
     * 
     */
    delete<T extends AyatDeleteArgs>(args: SelectSubset<T, AyatDeleteArgs<ExtArgs>>): Prisma__AyatClient<$Result.GetResult<Prisma.$AyatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ayat.
     * @param {AyatUpdateArgs} args - Arguments to update one Ayat.
     * @example
     * // Update one Ayat
     * const ayat = await prisma.ayat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AyatUpdateArgs>(args: SelectSubset<T, AyatUpdateArgs<ExtArgs>>): Prisma__AyatClient<$Result.GetResult<Prisma.$AyatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ayats.
     * @param {AyatDeleteManyArgs} args - Arguments to filter Ayats to delete.
     * @example
     * // Delete a few Ayats
     * const { count } = await prisma.ayat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AyatDeleteManyArgs>(args?: SelectSubset<T, AyatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ayats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ayats
     * const ayat = await prisma.ayat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AyatUpdateManyArgs>(args: SelectSubset<T, AyatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ayats and returns the data updated in the database.
     * @param {AyatUpdateManyAndReturnArgs} args - Arguments to update many Ayats.
     * @example
     * // Update many Ayats
     * const ayat = await prisma.ayat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ayats and only return the `id`
     * const ayatWithIdOnly = await prisma.ayat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AyatUpdateManyAndReturnArgs>(args: SelectSubset<T, AyatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AyatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ayat.
     * @param {AyatUpsertArgs} args - Arguments to update or create a Ayat.
     * @example
     * // Update or create a Ayat
     * const ayat = await prisma.ayat.upsert({
     *   create: {
     *     // ... data to create a Ayat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ayat we want to update
     *   }
     * })
     */
    upsert<T extends AyatUpsertArgs>(args: SelectSubset<T, AyatUpsertArgs<ExtArgs>>): Prisma__AyatClient<$Result.GetResult<Prisma.$AyatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ayats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyatCountArgs} args - Arguments to filter Ayats to count.
     * @example
     * // Count the number of Ayats
     * const count = await prisma.ayat.count({
     *   where: {
     *     // ... the filter for the Ayats we want to count
     *   }
     * })
    **/
    count<T extends AyatCountArgs>(
      args?: Subset<T, AyatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AyatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ayat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AyatAggregateArgs>(args: Subset<T, AyatAggregateArgs>): Prisma.PrismaPromise<GetAyatAggregateType<T>>

    /**
     * Group by Ayat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AyatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AyatGroupByArgs['orderBy'] }
        : { orderBy?: AyatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AyatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAyatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ayat model
   */
  readonly fields: AyatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ayat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AyatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    surah<T extends SurahDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SurahDefaultArgs<ExtArgs>>): Prisma__SurahClient<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ayat model
   */
  interface AyatFieldRefs {
    readonly id: FieldRef<"Ayat", 'Int'>
    readonly surah_number: FieldRef<"Ayat", 'Int'>
    readonly ayat_number: FieldRef<"Ayat", 'Int'>
    readonly arabic: FieldRef<"Ayat", 'String'>
    readonly kitabah: FieldRef<"Ayat", 'String'>
    readonly latin: FieldRef<"Ayat", 'String'>
    readonly translation: FieldRef<"Ayat", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ayat findUnique
   */
  export type AyatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayat
     */
    select?: AyatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayat
     */
    omit?: AyatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyatInclude<ExtArgs> | null
    /**
     * Filter, which Ayat to fetch.
     */
    where: AyatWhereUniqueInput
  }

  /**
   * Ayat findUniqueOrThrow
   */
  export type AyatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayat
     */
    select?: AyatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayat
     */
    omit?: AyatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyatInclude<ExtArgs> | null
    /**
     * Filter, which Ayat to fetch.
     */
    where: AyatWhereUniqueInput
  }

  /**
   * Ayat findFirst
   */
  export type AyatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayat
     */
    select?: AyatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayat
     */
    omit?: AyatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyatInclude<ExtArgs> | null
    /**
     * Filter, which Ayat to fetch.
     */
    where?: AyatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ayats to fetch.
     */
    orderBy?: AyatOrderByWithRelationInput | AyatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ayats.
     */
    cursor?: AyatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ayats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ayats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ayats.
     */
    distinct?: AyatScalarFieldEnum | AyatScalarFieldEnum[]
  }

  /**
   * Ayat findFirstOrThrow
   */
  export type AyatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayat
     */
    select?: AyatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayat
     */
    omit?: AyatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyatInclude<ExtArgs> | null
    /**
     * Filter, which Ayat to fetch.
     */
    where?: AyatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ayats to fetch.
     */
    orderBy?: AyatOrderByWithRelationInput | AyatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ayats.
     */
    cursor?: AyatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ayats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ayats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ayats.
     */
    distinct?: AyatScalarFieldEnum | AyatScalarFieldEnum[]
  }

  /**
   * Ayat findMany
   */
  export type AyatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayat
     */
    select?: AyatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayat
     */
    omit?: AyatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyatInclude<ExtArgs> | null
    /**
     * Filter, which Ayats to fetch.
     */
    where?: AyatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ayats to fetch.
     */
    orderBy?: AyatOrderByWithRelationInput | AyatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ayats.
     */
    cursor?: AyatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ayats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ayats.
     */
    skip?: number
    distinct?: AyatScalarFieldEnum | AyatScalarFieldEnum[]
  }

  /**
   * Ayat create
   */
  export type AyatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayat
     */
    select?: AyatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayat
     */
    omit?: AyatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyatInclude<ExtArgs> | null
    /**
     * The data needed to create a Ayat.
     */
    data: XOR<AyatCreateInput, AyatUncheckedCreateInput>
  }

  /**
   * Ayat createMany
   */
  export type AyatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ayats.
     */
    data: AyatCreateManyInput | AyatCreateManyInput[]
  }

  /**
   * Ayat createManyAndReturn
   */
  export type AyatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayat
     */
    select?: AyatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ayat
     */
    omit?: AyatOmit<ExtArgs> | null
    /**
     * The data used to create many Ayats.
     */
    data: AyatCreateManyInput | AyatCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ayat update
   */
  export type AyatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayat
     */
    select?: AyatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayat
     */
    omit?: AyatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyatInclude<ExtArgs> | null
    /**
     * The data needed to update a Ayat.
     */
    data: XOR<AyatUpdateInput, AyatUncheckedUpdateInput>
    /**
     * Choose, which Ayat to update.
     */
    where: AyatWhereUniqueInput
  }

  /**
   * Ayat updateMany
   */
  export type AyatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ayats.
     */
    data: XOR<AyatUpdateManyMutationInput, AyatUncheckedUpdateManyInput>
    /**
     * Filter which Ayats to update
     */
    where?: AyatWhereInput
    /**
     * Limit how many Ayats to update.
     */
    limit?: number
  }

  /**
   * Ayat updateManyAndReturn
   */
  export type AyatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayat
     */
    select?: AyatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ayat
     */
    omit?: AyatOmit<ExtArgs> | null
    /**
     * The data used to update Ayats.
     */
    data: XOR<AyatUpdateManyMutationInput, AyatUncheckedUpdateManyInput>
    /**
     * Filter which Ayats to update
     */
    where?: AyatWhereInput
    /**
     * Limit how many Ayats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ayat upsert
   */
  export type AyatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayat
     */
    select?: AyatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayat
     */
    omit?: AyatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyatInclude<ExtArgs> | null
    /**
     * The filter to search for the Ayat to update in case it exists.
     */
    where: AyatWhereUniqueInput
    /**
     * In case the Ayat found by the `where` argument doesn't exist, create a new Ayat with this data.
     */
    create: XOR<AyatCreateInput, AyatUncheckedCreateInput>
    /**
     * In case the Ayat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AyatUpdateInput, AyatUncheckedUpdateInput>
  }

  /**
   * Ayat delete
   */
  export type AyatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayat
     */
    select?: AyatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayat
     */
    omit?: AyatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyatInclude<ExtArgs> | null
    /**
     * Filter which Ayat to delete.
     */
    where: AyatWhereUniqueInput
  }

  /**
   * Ayat deleteMany
   */
  export type AyatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ayats to delete
     */
    where?: AyatWhereInput
    /**
     * Limit how many Ayats to delete.
     */
    limit?: number
  }

  /**
   * Ayat without action
   */
  export type AyatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayat
     */
    select?: AyatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayat
     */
    omit?: AyatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyatInclude<ExtArgs> | null
  }


  /**
   * Model Hadits
   */

  export type AggregateHadits = {
    _count: HaditsCountAggregateOutputType | null
    _avg: HaditsAvgAggregateOutputType | null
    _sum: HaditsSumAggregateOutputType | null
    _min: HaditsMinAggregateOutputType | null
    _max: HaditsMaxAggregateOutputType | null
  }

  export type HaditsAvgAggregateOutputType = {
    total: number | null
  }

  export type HaditsSumAggregateOutputType = {
    total: number | null
  }

  export type HaditsMinAggregateOutputType = {
    slug: string | null
    name: string | null
    total: number | null
  }

  export type HaditsMaxAggregateOutputType = {
    slug: string | null
    name: string | null
    total: number | null
  }

  export type HaditsCountAggregateOutputType = {
    slug: number
    name: number
    total: number
    _all: number
  }


  export type HaditsAvgAggregateInputType = {
    total?: true
  }

  export type HaditsSumAggregateInputType = {
    total?: true
  }

  export type HaditsMinAggregateInputType = {
    slug?: true
    name?: true
    total?: true
  }

  export type HaditsMaxAggregateInputType = {
    slug?: true
    name?: true
    total?: true
  }

  export type HaditsCountAggregateInputType = {
    slug?: true
    name?: true
    total?: true
    _all?: true
  }

  export type HaditsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hadits to aggregate.
     */
    where?: HaditsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hadits to fetch.
     */
    orderBy?: HaditsOrderByWithRelationInput | HaditsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HaditsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hadits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hadits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hadits
    **/
    _count?: true | HaditsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HaditsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HaditsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HaditsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HaditsMaxAggregateInputType
  }

  export type GetHaditsAggregateType<T extends HaditsAggregateArgs> = {
        [P in keyof T & keyof AggregateHadits]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHadits[P]>
      : GetScalarType<T[P], AggregateHadits[P]>
  }




  export type HaditsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HaditsWhereInput
    orderBy?: HaditsOrderByWithAggregationInput | HaditsOrderByWithAggregationInput[]
    by: HaditsScalarFieldEnum[] | HaditsScalarFieldEnum
    having?: HaditsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HaditsCountAggregateInputType | true
    _avg?: HaditsAvgAggregateInputType
    _sum?: HaditsSumAggregateInputType
    _min?: HaditsMinAggregateInputType
    _max?: HaditsMaxAggregateInputType
  }

  export type HaditsGroupByOutputType = {
    slug: string
    name: string
    total: number
    _count: HaditsCountAggregateOutputType | null
    _avg: HaditsAvgAggregateOutputType | null
    _sum: HaditsSumAggregateOutputType | null
    _min: HaditsMinAggregateOutputType | null
    _max: HaditsMaxAggregateOutputType | null
  }

  type GetHaditsGroupByPayload<T extends HaditsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HaditsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HaditsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HaditsGroupByOutputType[P]>
            : GetScalarType<T[P], HaditsGroupByOutputType[P]>
        }
      >
    >


  export type HaditsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    slug?: boolean
    name?: boolean
    total?: boolean
    details?: boolean | Hadits$detailsArgs<ExtArgs>
    _count?: boolean | HaditsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hadits"]>

  export type HaditsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    slug?: boolean
    name?: boolean
    total?: boolean
  }, ExtArgs["result"]["hadits"]>

  export type HaditsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    slug?: boolean
    name?: boolean
    total?: boolean
  }, ExtArgs["result"]["hadits"]>

  export type HaditsSelectScalar = {
    slug?: boolean
    name?: boolean
    total?: boolean
  }

  export type HaditsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"slug" | "name" | "total", ExtArgs["result"]["hadits"]>
  export type HaditsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    details?: boolean | Hadits$detailsArgs<ExtArgs>
    _count?: boolean | HaditsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HaditsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HaditsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HaditsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hadits"
    objects: {
      details: Prisma.$DetailHaditsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      slug: string
      name: string
      total: number
    }, ExtArgs["result"]["hadits"]>
    composites: {}
  }

  type HaditsGetPayload<S extends boolean | null | undefined | HaditsDefaultArgs> = $Result.GetResult<Prisma.$HaditsPayload, S>

  type HaditsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HaditsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HaditsCountAggregateInputType | true
    }

  export interface HaditsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hadits'], meta: { name: 'Hadits' } }
    /**
     * Find zero or one Hadits that matches the filter.
     * @param {HaditsFindUniqueArgs} args - Arguments to find a Hadits
     * @example
     * // Get one Hadits
     * const hadits = await prisma.hadits.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HaditsFindUniqueArgs>(args: SelectSubset<T, HaditsFindUniqueArgs<ExtArgs>>): Prisma__HaditsClient<$Result.GetResult<Prisma.$HaditsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hadits that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HaditsFindUniqueOrThrowArgs} args - Arguments to find a Hadits
     * @example
     * // Get one Hadits
     * const hadits = await prisma.hadits.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HaditsFindUniqueOrThrowArgs>(args: SelectSubset<T, HaditsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HaditsClient<$Result.GetResult<Prisma.$HaditsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hadits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HaditsFindFirstArgs} args - Arguments to find a Hadits
     * @example
     * // Get one Hadits
     * const hadits = await prisma.hadits.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HaditsFindFirstArgs>(args?: SelectSubset<T, HaditsFindFirstArgs<ExtArgs>>): Prisma__HaditsClient<$Result.GetResult<Prisma.$HaditsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hadits that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HaditsFindFirstOrThrowArgs} args - Arguments to find a Hadits
     * @example
     * // Get one Hadits
     * const hadits = await prisma.hadits.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HaditsFindFirstOrThrowArgs>(args?: SelectSubset<T, HaditsFindFirstOrThrowArgs<ExtArgs>>): Prisma__HaditsClient<$Result.GetResult<Prisma.$HaditsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hadits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HaditsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hadits
     * const hadits = await prisma.hadits.findMany()
     * 
     * // Get first 10 Hadits
     * const hadits = await prisma.hadits.findMany({ take: 10 })
     * 
     * // Only select the `slug`
     * const haditsWithSlugOnly = await prisma.hadits.findMany({ select: { slug: true } })
     * 
     */
    findMany<T extends HaditsFindManyArgs>(args?: SelectSubset<T, HaditsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HaditsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hadits.
     * @param {HaditsCreateArgs} args - Arguments to create a Hadits.
     * @example
     * // Create one Hadits
     * const Hadits = await prisma.hadits.create({
     *   data: {
     *     // ... data to create a Hadits
     *   }
     * })
     * 
     */
    create<T extends HaditsCreateArgs>(args: SelectSubset<T, HaditsCreateArgs<ExtArgs>>): Prisma__HaditsClient<$Result.GetResult<Prisma.$HaditsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hadits.
     * @param {HaditsCreateManyArgs} args - Arguments to create many Hadits.
     * @example
     * // Create many Hadits
     * const hadits = await prisma.hadits.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HaditsCreateManyArgs>(args?: SelectSubset<T, HaditsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hadits and returns the data saved in the database.
     * @param {HaditsCreateManyAndReturnArgs} args - Arguments to create many Hadits.
     * @example
     * // Create many Hadits
     * const hadits = await prisma.hadits.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hadits and only return the `slug`
     * const haditsWithSlugOnly = await prisma.hadits.createManyAndReturn({
     *   select: { slug: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HaditsCreateManyAndReturnArgs>(args?: SelectSubset<T, HaditsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HaditsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hadits.
     * @param {HaditsDeleteArgs} args - Arguments to delete one Hadits.
     * @example
     * // Delete one Hadits
     * const Hadits = await prisma.hadits.delete({
     *   where: {
     *     // ... filter to delete one Hadits
     *   }
     * })
     * 
     */
    delete<T extends HaditsDeleteArgs>(args: SelectSubset<T, HaditsDeleteArgs<ExtArgs>>): Prisma__HaditsClient<$Result.GetResult<Prisma.$HaditsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hadits.
     * @param {HaditsUpdateArgs} args - Arguments to update one Hadits.
     * @example
     * // Update one Hadits
     * const hadits = await prisma.hadits.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HaditsUpdateArgs>(args: SelectSubset<T, HaditsUpdateArgs<ExtArgs>>): Prisma__HaditsClient<$Result.GetResult<Prisma.$HaditsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hadits.
     * @param {HaditsDeleteManyArgs} args - Arguments to filter Hadits to delete.
     * @example
     * // Delete a few Hadits
     * const { count } = await prisma.hadits.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HaditsDeleteManyArgs>(args?: SelectSubset<T, HaditsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hadits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HaditsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hadits
     * const hadits = await prisma.hadits.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HaditsUpdateManyArgs>(args: SelectSubset<T, HaditsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hadits and returns the data updated in the database.
     * @param {HaditsUpdateManyAndReturnArgs} args - Arguments to update many Hadits.
     * @example
     * // Update many Hadits
     * const hadits = await prisma.hadits.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hadits and only return the `slug`
     * const haditsWithSlugOnly = await prisma.hadits.updateManyAndReturn({
     *   select: { slug: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HaditsUpdateManyAndReturnArgs>(args: SelectSubset<T, HaditsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HaditsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hadits.
     * @param {HaditsUpsertArgs} args - Arguments to update or create a Hadits.
     * @example
     * // Update or create a Hadits
     * const hadits = await prisma.hadits.upsert({
     *   create: {
     *     // ... data to create a Hadits
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hadits we want to update
     *   }
     * })
     */
    upsert<T extends HaditsUpsertArgs>(args: SelectSubset<T, HaditsUpsertArgs<ExtArgs>>): Prisma__HaditsClient<$Result.GetResult<Prisma.$HaditsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hadits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HaditsCountArgs} args - Arguments to filter Hadits to count.
     * @example
     * // Count the number of Hadits
     * const count = await prisma.hadits.count({
     *   where: {
     *     // ... the filter for the Hadits we want to count
     *   }
     * })
    **/
    count<T extends HaditsCountArgs>(
      args?: Subset<T, HaditsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HaditsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hadits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HaditsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HaditsAggregateArgs>(args: Subset<T, HaditsAggregateArgs>): Prisma.PrismaPromise<GetHaditsAggregateType<T>>

    /**
     * Group by Hadits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HaditsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HaditsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HaditsGroupByArgs['orderBy'] }
        : { orderBy?: HaditsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HaditsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHaditsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hadits model
   */
  readonly fields: HaditsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hadits.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HaditsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    details<T extends Hadits$detailsArgs<ExtArgs> = {}>(args?: Subset<T, Hadits$detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailHaditsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Hadits model
   */
  interface HaditsFieldRefs {
    readonly slug: FieldRef<"Hadits", 'String'>
    readonly name: FieldRef<"Hadits", 'String'>
    readonly total: FieldRef<"Hadits", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Hadits findUnique
   */
  export type HaditsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hadits
     */
    select?: HaditsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hadits
     */
    omit?: HaditsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HaditsInclude<ExtArgs> | null
    /**
     * Filter, which Hadits to fetch.
     */
    where: HaditsWhereUniqueInput
  }

  /**
   * Hadits findUniqueOrThrow
   */
  export type HaditsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hadits
     */
    select?: HaditsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hadits
     */
    omit?: HaditsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HaditsInclude<ExtArgs> | null
    /**
     * Filter, which Hadits to fetch.
     */
    where: HaditsWhereUniqueInput
  }

  /**
   * Hadits findFirst
   */
  export type HaditsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hadits
     */
    select?: HaditsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hadits
     */
    omit?: HaditsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HaditsInclude<ExtArgs> | null
    /**
     * Filter, which Hadits to fetch.
     */
    where?: HaditsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hadits to fetch.
     */
    orderBy?: HaditsOrderByWithRelationInput | HaditsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hadits.
     */
    cursor?: HaditsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hadits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hadits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hadits.
     */
    distinct?: HaditsScalarFieldEnum | HaditsScalarFieldEnum[]
  }

  /**
   * Hadits findFirstOrThrow
   */
  export type HaditsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hadits
     */
    select?: HaditsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hadits
     */
    omit?: HaditsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HaditsInclude<ExtArgs> | null
    /**
     * Filter, which Hadits to fetch.
     */
    where?: HaditsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hadits to fetch.
     */
    orderBy?: HaditsOrderByWithRelationInput | HaditsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hadits.
     */
    cursor?: HaditsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hadits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hadits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hadits.
     */
    distinct?: HaditsScalarFieldEnum | HaditsScalarFieldEnum[]
  }

  /**
   * Hadits findMany
   */
  export type HaditsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hadits
     */
    select?: HaditsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hadits
     */
    omit?: HaditsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HaditsInclude<ExtArgs> | null
    /**
     * Filter, which Hadits to fetch.
     */
    where?: HaditsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hadits to fetch.
     */
    orderBy?: HaditsOrderByWithRelationInput | HaditsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hadits.
     */
    cursor?: HaditsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hadits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hadits.
     */
    skip?: number
    distinct?: HaditsScalarFieldEnum | HaditsScalarFieldEnum[]
  }

  /**
   * Hadits create
   */
  export type HaditsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hadits
     */
    select?: HaditsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hadits
     */
    omit?: HaditsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HaditsInclude<ExtArgs> | null
    /**
     * The data needed to create a Hadits.
     */
    data: XOR<HaditsCreateInput, HaditsUncheckedCreateInput>
  }

  /**
   * Hadits createMany
   */
  export type HaditsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hadits.
     */
    data: HaditsCreateManyInput | HaditsCreateManyInput[]
  }

  /**
   * Hadits createManyAndReturn
   */
  export type HaditsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hadits
     */
    select?: HaditsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hadits
     */
    omit?: HaditsOmit<ExtArgs> | null
    /**
     * The data used to create many Hadits.
     */
    data: HaditsCreateManyInput | HaditsCreateManyInput[]
  }

  /**
   * Hadits update
   */
  export type HaditsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hadits
     */
    select?: HaditsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hadits
     */
    omit?: HaditsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HaditsInclude<ExtArgs> | null
    /**
     * The data needed to update a Hadits.
     */
    data: XOR<HaditsUpdateInput, HaditsUncheckedUpdateInput>
    /**
     * Choose, which Hadits to update.
     */
    where: HaditsWhereUniqueInput
  }

  /**
   * Hadits updateMany
   */
  export type HaditsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hadits.
     */
    data: XOR<HaditsUpdateManyMutationInput, HaditsUncheckedUpdateManyInput>
    /**
     * Filter which Hadits to update
     */
    where?: HaditsWhereInput
    /**
     * Limit how many Hadits to update.
     */
    limit?: number
  }

  /**
   * Hadits updateManyAndReturn
   */
  export type HaditsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hadits
     */
    select?: HaditsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hadits
     */
    omit?: HaditsOmit<ExtArgs> | null
    /**
     * The data used to update Hadits.
     */
    data: XOR<HaditsUpdateManyMutationInput, HaditsUncheckedUpdateManyInput>
    /**
     * Filter which Hadits to update
     */
    where?: HaditsWhereInput
    /**
     * Limit how many Hadits to update.
     */
    limit?: number
  }

  /**
   * Hadits upsert
   */
  export type HaditsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hadits
     */
    select?: HaditsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hadits
     */
    omit?: HaditsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HaditsInclude<ExtArgs> | null
    /**
     * The filter to search for the Hadits to update in case it exists.
     */
    where: HaditsWhereUniqueInput
    /**
     * In case the Hadits found by the `where` argument doesn't exist, create a new Hadits with this data.
     */
    create: XOR<HaditsCreateInput, HaditsUncheckedCreateInput>
    /**
     * In case the Hadits was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HaditsUpdateInput, HaditsUncheckedUpdateInput>
  }

  /**
   * Hadits delete
   */
  export type HaditsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hadits
     */
    select?: HaditsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hadits
     */
    omit?: HaditsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HaditsInclude<ExtArgs> | null
    /**
     * Filter which Hadits to delete.
     */
    where: HaditsWhereUniqueInput
  }

  /**
   * Hadits deleteMany
   */
  export type HaditsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hadits to delete
     */
    where?: HaditsWhereInput
    /**
     * Limit how many Hadits to delete.
     */
    limit?: number
  }

  /**
   * Hadits.details
   */
  export type Hadits$detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailHadits
     */
    select?: DetailHaditsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailHadits
     */
    omit?: DetailHaditsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailHaditsInclude<ExtArgs> | null
    where?: DetailHaditsWhereInput
    orderBy?: DetailHaditsOrderByWithRelationInput | DetailHaditsOrderByWithRelationInput[]
    cursor?: DetailHaditsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetailHaditsScalarFieldEnum | DetailHaditsScalarFieldEnum[]
  }

  /**
   * Hadits without action
   */
  export type HaditsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hadits
     */
    select?: HaditsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hadits
     */
    omit?: HaditsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HaditsInclude<ExtArgs> | null
  }


  /**
   * Model DetailHadits
   */

  export type AggregateDetailHadits = {
    _count: DetailHaditsCountAggregateOutputType | null
    _avg: DetailHaditsAvgAggregateOutputType | null
    _sum: DetailHaditsSumAggregateOutputType | null
    _min: DetailHaditsMinAggregateOutputType | null
    _max: DetailHaditsMaxAggregateOutputType | null
  }

  export type DetailHaditsAvgAggregateOutputType = {
    id: number | null
    number: number | null
  }

  export type DetailHaditsSumAggregateOutputType = {
    id: number | null
    number: number | null
  }

  export type DetailHaditsMinAggregateOutputType = {
    id: number | null
    number: number | null
    arab: string | null
    terjemah: string | null
    slug: string | null
  }

  export type DetailHaditsMaxAggregateOutputType = {
    id: number | null
    number: number | null
    arab: string | null
    terjemah: string | null
    slug: string | null
  }

  export type DetailHaditsCountAggregateOutputType = {
    id: number
    number: number
    arab: number
    terjemah: number
    slug: number
    _all: number
  }


  export type DetailHaditsAvgAggregateInputType = {
    id?: true
    number?: true
  }

  export type DetailHaditsSumAggregateInputType = {
    id?: true
    number?: true
  }

  export type DetailHaditsMinAggregateInputType = {
    id?: true
    number?: true
    arab?: true
    terjemah?: true
    slug?: true
  }

  export type DetailHaditsMaxAggregateInputType = {
    id?: true
    number?: true
    arab?: true
    terjemah?: true
    slug?: true
  }

  export type DetailHaditsCountAggregateInputType = {
    id?: true
    number?: true
    arab?: true
    terjemah?: true
    slug?: true
    _all?: true
  }

  export type DetailHaditsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetailHadits to aggregate.
     */
    where?: DetailHaditsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailHadits to fetch.
     */
    orderBy?: DetailHaditsOrderByWithRelationInput | DetailHaditsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetailHaditsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailHadits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailHadits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DetailHadits
    **/
    _count?: true | DetailHaditsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetailHaditsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetailHaditsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetailHaditsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetailHaditsMaxAggregateInputType
  }

  export type GetDetailHaditsAggregateType<T extends DetailHaditsAggregateArgs> = {
        [P in keyof T & keyof AggregateDetailHadits]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetailHadits[P]>
      : GetScalarType<T[P], AggregateDetailHadits[P]>
  }




  export type DetailHaditsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailHaditsWhereInput
    orderBy?: DetailHaditsOrderByWithAggregationInput | DetailHaditsOrderByWithAggregationInput[]
    by: DetailHaditsScalarFieldEnum[] | DetailHaditsScalarFieldEnum
    having?: DetailHaditsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetailHaditsCountAggregateInputType | true
    _avg?: DetailHaditsAvgAggregateInputType
    _sum?: DetailHaditsSumAggregateInputType
    _min?: DetailHaditsMinAggregateInputType
    _max?: DetailHaditsMaxAggregateInputType
  }

  export type DetailHaditsGroupByOutputType = {
    id: number
    number: number
    arab: string
    terjemah: string
    slug: string
    _count: DetailHaditsCountAggregateOutputType | null
    _avg: DetailHaditsAvgAggregateOutputType | null
    _sum: DetailHaditsSumAggregateOutputType | null
    _min: DetailHaditsMinAggregateOutputType | null
    _max: DetailHaditsMaxAggregateOutputType | null
  }

  type GetDetailHaditsGroupByPayload<T extends DetailHaditsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetailHaditsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetailHaditsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetailHaditsGroupByOutputType[P]>
            : GetScalarType<T[P], DetailHaditsGroupByOutputType[P]>
        }
      >
    >


  export type DetailHaditsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    arab?: boolean
    terjemah?: boolean
    slug?: boolean
    rawi?: boolean | HaditsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detailHadits"]>

  export type DetailHaditsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    arab?: boolean
    terjemah?: boolean
    slug?: boolean
    rawi?: boolean | HaditsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detailHadits"]>

  export type DetailHaditsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    arab?: boolean
    terjemah?: boolean
    slug?: boolean
    rawi?: boolean | HaditsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detailHadits"]>

  export type DetailHaditsSelectScalar = {
    id?: boolean
    number?: boolean
    arab?: boolean
    terjemah?: boolean
    slug?: boolean
  }

  export type DetailHaditsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "number" | "arab" | "terjemah" | "slug", ExtArgs["result"]["detailHadits"]>
  export type DetailHaditsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rawi?: boolean | HaditsDefaultArgs<ExtArgs>
  }
  export type DetailHaditsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rawi?: boolean | HaditsDefaultArgs<ExtArgs>
  }
  export type DetailHaditsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rawi?: boolean | HaditsDefaultArgs<ExtArgs>
  }

  export type $DetailHaditsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DetailHadits"
    objects: {
      rawi: Prisma.$HaditsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      number: number
      arab: string
      terjemah: string
      slug: string
    }, ExtArgs["result"]["detailHadits"]>
    composites: {}
  }

  type DetailHaditsGetPayload<S extends boolean | null | undefined | DetailHaditsDefaultArgs> = $Result.GetResult<Prisma.$DetailHaditsPayload, S>

  type DetailHaditsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetailHaditsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetailHaditsCountAggregateInputType | true
    }

  export interface DetailHaditsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DetailHadits'], meta: { name: 'DetailHadits' } }
    /**
     * Find zero or one DetailHadits that matches the filter.
     * @param {DetailHaditsFindUniqueArgs} args - Arguments to find a DetailHadits
     * @example
     * // Get one DetailHadits
     * const detailHadits = await prisma.detailHadits.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetailHaditsFindUniqueArgs>(args: SelectSubset<T, DetailHaditsFindUniqueArgs<ExtArgs>>): Prisma__DetailHaditsClient<$Result.GetResult<Prisma.$DetailHaditsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DetailHadits that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetailHaditsFindUniqueOrThrowArgs} args - Arguments to find a DetailHadits
     * @example
     * // Get one DetailHadits
     * const detailHadits = await prisma.detailHadits.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetailHaditsFindUniqueOrThrowArgs>(args: SelectSubset<T, DetailHaditsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetailHaditsClient<$Result.GetResult<Prisma.$DetailHaditsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetailHadits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailHaditsFindFirstArgs} args - Arguments to find a DetailHadits
     * @example
     * // Get one DetailHadits
     * const detailHadits = await prisma.detailHadits.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetailHaditsFindFirstArgs>(args?: SelectSubset<T, DetailHaditsFindFirstArgs<ExtArgs>>): Prisma__DetailHaditsClient<$Result.GetResult<Prisma.$DetailHaditsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetailHadits that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailHaditsFindFirstOrThrowArgs} args - Arguments to find a DetailHadits
     * @example
     * // Get one DetailHadits
     * const detailHadits = await prisma.detailHadits.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetailHaditsFindFirstOrThrowArgs>(args?: SelectSubset<T, DetailHaditsFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetailHaditsClient<$Result.GetResult<Prisma.$DetailHaditsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DetailHadits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailHaditsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetailHadits
     * const detailHadits = await prisma.detailHadits.findMany()
     * 
     * // Get first 10 DetailHadits
     * const detailHadits = await prisma.detailHadits.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detailHaditsWithIdOnly = await prisma.detailHadits.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DetailHaditsFindManyArgs>(args?: SelectSubset<T, DetailHaditsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailHaditsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DetailHadits.
     * @param {DetailHaditsCreateArgs} args - Arguments to create a DetailHadits.
     * @example
     * // Create one DetailHadits
     * const DetailHadits = await prisma.detailHadits.create({
     *   data: {
     *     // ... data to create a DetailHadits
     *   }
     * })
     * 
     */
    create<T extends DetailHaditsCreateArgs>(args: SelectSubset<T, DetailHaditsCreateArgs<ExtArgs>>): Prisma__DetailHaditsClient<$Result.GetResult<Prisma.$DetailHaditsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DetailHadits.
     * @param {DetailHaditsCreateManyArgs} args - Arguments to create many DetailHadits.
     * @example
     * // Create many DetailHadits
     * const detailHadits = await prisma.detailHadits.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetailHaditsCreateManyArgs>(args?: SelectSubset<T, DetailHaditsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DetailHadits and returns the data saved in the database.
     * @param {DetailHaditsCreateManyAndReturnArgs} args - Arguments to create many DetailHadits.
     * @example
     * // Create many DetailHadits
     * const detailHadits = await prisma.detailHadits.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DetailHadits and only return the `id`
     * const detailHaditsWithIdOnly = await prisma.detailHadits.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DetailHaditsCreateManyAndReturnArgs>(args?: SelectSubset<T, DetailHaditsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailHaditsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DetailHadits.
     * @param {DetailHaditsDeleteArgs} args - Arguments to delete one DetailHadits.
     * @example
     * // Delete one DetailHadits
     * const DetailHadits = await prisma.detailHadits.delete({
     *   where: {
     *     // ... filter to delete one DetailHadits
     *   }
     * })
     * 
     */
    delete<T extends DetailHaditsDeleteArgs>(args: SelectSubset<T, DetailHaditsDeleteArgs<ExtArgs>>): Prisma__DetailHaditsClient<$Result.GetResult<Prisma.$DetailHaditsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DetailHadits.
     * @param {DetailHaditsUpdateArgs} args - Arguments to update one DetailHadits.
     * @example
     * // Update one DetailHadits
     * const detailHadits = await prisma.detailHadits.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetailHaditsUpdateArgs>(args: SelectSubset<T, DetailHaditsUpdateArgs<ExtArgs>>): Prisma__DetailHaditsClient<$Result.GetResult<Prisma.$DetailHaditsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DetailHadits.
     * @param {DetailHaditsDeleteManyArgs} args - Arguments to filter DetailHadits to delete.
     * @example
     * // Delete a few DetailHadits
     * const { count } = await prisma.detailHadits.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetailHaditsDeleteManyArgs>(args?: SelectSubset<T, DetailHaditsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetailHadits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailHaditsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetailHadits
     * const detailHadits = await prisma.detailHadits.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetailHaditsUpdateManyArgs>(args: SelectSubset<T, DetailHaditsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetailHadits and returns the data updated in the database.
     * @param {DetailHaditsUpdateManyAndReturnArgs} args - Arguments to update many DetailHadits.
     * @example
     * // Update many DetailHadits
     * const detailHadits = await prisma.detailHadits.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DetailHadits and only return the `id`
     * const detailHaditsWithIdOnly = await prisma.detailHadits.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DetailHaditsUpdateManyAndReturnArgs>(args: SelectSubset<T, DetailHaditsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailHaditsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DetailHadits.
     * @param {DetailHaditsUpsertArgs} args - Arguments to update or create a DetailHadits.
     * @example
     * // Update or create a DetailHadits
     * const detailHadits = await prisma.detailHadits.upsert({
     *   create: {
     *     // ... data to create a DetailHadits
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetailHadits we want to update
     *   }
     * })
     */
    upsert<T extends DetailHaditsUpsertArgs>(args: SelectSubset<T, DetailHaditsUpsertArgs<ExtArgs>>): Prisma__DetailHaditsClient<$Result.GetResult<Prisma.$DetailHaditsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DetailHadits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailHaditsCountArgs} args - Arguments to filter DetailHadits to count.
     * @example
     * // Count the number of DetailHadits
     * const count = await prisma.detailHadits.count({
     *   where: {
     *     // ... the filter for the DetailHadits we want to count
     *   }
     * })
    **/
    count<T extends DetailHaditsCountArgs>(
      args?: Subset<T, DetailHaditsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetailHaditsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetailHadits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailHaditsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DetailHaditsAggregateArgs>(args: Subset<T, DetailHaditsAggregateArgs>): Prisma.PrismaPromise<GetDetailHaditsAggregateType<T>>

    /**
     * Group by DetailHadits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailHaditsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DetailHaditsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetailHaditsGroupByArgs['orderBy'] }
        : { orderBy?: DetailHaditsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DetailHaditsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetailHaditsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DetailHadits model
   */
  readonly fields: DetailHaditsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DetailHadits.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetailHaditsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rawi<T extends HaditsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HaditsDefaultArgs<ExtArgs>>): Prisma__HaditsClient<$Result.GetResult<Prisma.$HaditsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DetailHadits model
   */
  interface DetailHaditsFieldRefs {
    readonly id: FieldRef<"DetailHadits", 'Int'>
    readonly number: FieldRef<"DetailHadits", 'Int'>
    readonly arab: FieldRef<"DetailHadits", 'String'>
    readonly terjemah: FieldRef<"DetailHadits", 'String'>
    readonly slug: FieldRef<"DetailHadits", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DetailHadits findUnique
   */
  export type DetailHaditsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailHadits
     */
    select?: DetailHaditsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailHadits
     */
    omit?: DetailHaditsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailHaditsInclude<ExtArgs> | null
    /**
     * Filter, which DetailHadits to fetch.
     */
    where: DetailHaditsWhereUniqueInput
  }

  /**
   * DetailHadits findUniqueOrThrow
   */
  export type DetailHaditsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailHadits
     */
    select?: DetailHaditsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailHadits
     */
    omit?: DetailHaditsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailHaditsInclude<ExtArgs> | null
    /**
     * Filter, which DetailHadits to fetch.
     */
    where: DetailHaditsWhereUniqueInput
  }

  /**
   * DetailHadits findFirst
   */
  export type DetailHaditsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailHadits
     */
    select?: DetailHaditsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailHadits
     */
    omit?: DetailHaditsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailHaditsInclude<ExtArgs> | null
    /**
     * Filter, which DetailHadits to fetch.
     */
    where?: DetailHaditsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailHadits to fetch.
     */
    orderBy?: DetailHaditsOrderByWithRelationInput | DetailHaditsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetailHadits.
     */
    cursor?: DetailHaditsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailHadits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailHadits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetailHadits.
     */
    distinct?: DetailHaditsScalarFieldEnum | DetailHaditsScalarFieldEnum[]
  }

  /**
   * DetailHadits findFirstOrThrow
   */
  export type DetailHaditsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailHadits
     */
    select?: DetailHaditsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailHadits
     */
    omit?: DetailHaditsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailHaditsInclude<ExtArgs> | null
    /**
     * Filter, which DetailHadits to fetch.
     */
    where?: DetailHaditsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailHadits to fetch.
     */
    orderBy?: DetailHaditsOrderByWithRelationInput | DetailHaditsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetailHadits.
     */
    cursor?: DetailHaditsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailHadits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailHadits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetailHadits.
     */
    distinct?: DetailHaditsScalarFieldEnum | DetailHaditsScalarFieldEnum[]
  }

  /**
   * DetailHadits findMany
   */
  export type DetailHaditsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailHadits
     */
    select?: DetailHaditsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailHadits
     */
    omit?: DetailHaditsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailHaditsInclude<ExtArgs> | null
    /**
     * Filter, which DetailHadits to fetch.
     */
    where?: DetailHaditsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailHadits to fetch.
     */
    orderBy?: DetailHaditsOrderByWithRelationInput | DetailHaditsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DetailHadits.
     */
    cursor?: DetailHaditsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailHadits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailHadits.
     */
    skip?: number
    distinct?: DetailHaditsScalarFieldEnum | DetailHaditsScalarFieldEnum[]
  }

  /**
   * DetailHadits create
   */
  export type DetailHaditsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailHadits
     */
    select?: DetailHaditsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailHadits
     */
    omit?: DetailHaditsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailHaditsInclude<ExtArgs> | null
    /**
     * The data needed to create a DetailHadits.
     */
    data: XOR<DetailHaditsCreateInput, DetailHaditsUncheckedCreateInput>
  }

  /**
   * DetailHadits createMany
   */
  export type DetailHaditsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DetailHadits.
     */
    data: DetailHaditsCreateManyInput | DetailHaditsCreateManyInput[]
  }

  /**
   * DetailHadits createManyAndReturn
   */
  export type DetailHaditsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailHadits
     */
    select?: DetailHaditsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DetailHadits
     */
    omit?: DetailHaditsOmit<ExtArgs> | null
    /**
     * The data used to create many DetailHadits.
     */
    data: DetailHaditsCreateManyInput | DetailHaditsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailHaditsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DetailHadits update
   */
  export type DetailHaditsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailHadits
     */
    select?: DetailHaditsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailHadits
     */
    omit?: DetailHaditsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailHaditsInclude<ExtArgs> | null
    /**
     * The data needed to update a DetailHadits.
     */
    data: XOR<DetailHaditsUpdateInput, DetailHaditsUncheckedUpdateInput>
    /**
     * Choose, which DetailHadits to update.
     */
    where: DetailHaditsWhereUniqueInput
  }

  /**
   * DetailHadits updateMany
   */
  export type DetailHaditsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DetailHadits.
     */
    data: XOR<DetailHaditsUpdateManyMutationInput, DetailHaditsUncheckedUpdateManyInput>
    /**
     * Filter which DetailHadits to update
     */
    where?: DetailHaditsWhereInput
    /**
     * Limit how many DetailHadits to update.
     */
    limit?: number
  }

  /**
   * DetailHadits updateManyAndReturn
   */
  export type DetailHaditsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailHadits
     */
    select?: DetailHaditsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DetailHadits
     */
    omit?: DetailHaditsOmit<ExtArgs> | null
    /**
     * The data used to update DetailHadits.
     */
    data: XOR<DetailHaditsUpdateManyMutationInput, DetailHaditsUncheckedUpdateManyInput>
    /**
     * Filter which DetailHadits to update
     */
    where?: DetailHaditsWhereInput
    /**
     * Limit how many DetailHadits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailHaditsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DetailHadits upsert
   */
  export type DetailHaditsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailHadits
     */
    select?: DetailHaditsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailHadits
     */
    omit?: DetailHaditsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailHaditsInclude<ExtArgs> | null
    /**
     * The filter to search for the DetailHadits to update in case it exists.
     */
    where: DetailHaditsWhereUniqueInput
    /**
     * In case the DetailHadits found by the `where` argument doesn't exist, create a new DetailHadits with this data.
     */
    create: XOR<DetailHaditsCreateInput, DetailHaditsUncheckedCreateInput>
    /**
     * In case the DetailHadits was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetailHaditsUpdateInput, DetailHaditsUncheckedUpdateInput>
  }

  /**
   * DetailHadits delete
   */
  export type DetailHaditsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailHadits
     */
    select?: DetailHaditsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailHadits
     */
    omit?: DetailHaditsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailHaditsInclude<ExtArgs> | null
    /**
     * Filter which DetailHadits to delete.
     */
    where: DetailHaditsWhereUniqueInput
  }

  /**
   * DetailHadits deleteMany
   */
  export type DetailHaditsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetailHadits to delete
     */
    where?: DetailHaditsWhereInput
    /**
     * Limit how many DetailHadits to delete.
     */
    limit?: number
  }

  /**
   * DetailHadits without action
   */
  export type DetailHaditsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailHadits
     */
    select?: DetailHaditsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailHadits
     */
    omit?: DetailHaditsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailHaditsInclude<ExtArgs> | null
  }


  /**
   * Model AsmaulHusna
   */

  export type AggregateAsmaulHusna = {
    _count: AsmaulHusnaCountAggregateOutputType | null
    _avg: AsmaulHusnaAvgAggregateOutputType | null
    _sum: AsmaulHusnaSumAggregateOutputType | null
    _min: AsmaulHusnaMinAggregateOutputType | null
    _max: AsmaulHusnaMaxAggregateOutputType | null
  }

  export type AsmaulHusnaAvgAggregateOutputType = {
    id: number | null
  }

  export type AsmaulHusnaSumAggregateOutputType = {
    id: number | null
  }

  export type AsmaulHusnaMinAggregateOutputType = {
    id: number | null
    latin: string | null
    arabic: string | null
    id_translation: string | null
    en_translation: string | null
  }

  export type AsmaulHusnaMaxAggregateOutputType = {
    id: number | null
    latin: string | null
    arabic: string | null
    id_translation: string | null
    en_translation: string | null
  }

  export type AsmaulHusnaCountAggregateOutputType = {
    id: number
    latin: number
    arabic: number
    id_translation: number
    en_translation: number
    _all: number
  }


  export type AsmaulHusnaAvgAggregateInputType = {
    id?: true
  }

  export type AsmaulHusnaSumAggregateInputType = {
    id?: true
  }

  export type AsmaulHusnaMinAggregateInputType = {
    id?: true
    latin?: true
    arabic?: true
    id_translation?: true
    en_translation?: true
  }

  export type AsmaulHusnaMaxAggregateInputType = {
    id?: true
    latin?: true
    arabic?: true
    id_translation?: true
    en_translation?: true
  }

  export type AsmaulHusnaCountAggregateInputType = {
    id?: true
    latin?: true
    arabic?: true
    id_translation?: true
    en_translation?: true
    _all?: true
  }

  export type AsmaulHusnaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AsmaulHusna to aggregate.
     */
    where?: AsmaulHusnaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsmaulHusnas to fetch.
     */
    orderBy?: AsmaulHusnaOrderByWithRelationInput | AsmaulHusnaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AsmaulHusnaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsmaulHusnas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsmaulHusnas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AsmaulHusnas
    **/
    _count?: true | AsmaulHusnaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AsmaulHusnaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AsmaulHusnaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AsmaulHusnaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AsmaulHusnaMaxAggregateInputType
  }

  export type GetAsmaulHusnaAggregateType<T extends AsmaulHusnaAggregateArgs> = {
        [P in keyof T & keyof AggregateAsmaulHusna]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsmaulHusna[P]>
      : GetScalarType<T[P], AggregateAsmaulHusna[P]>
  }




  export type AsmaulHusnaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsmaulHusnaWhereInput
    orderBy?: AsmaulHusnaOrderByWithAggregationInput | AsmaulHusnaOrderByWithAggregationInput[]
    by: AsmaulHusnaScalarFieldEnum[] | AsmaulHusnaScalarFieldEnum
    having?: AsmaulHusnaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AsmaulHusnaCountAggregateInputType | true
    _avg?: AsmaulHusnaAvgAggregateInputType
    _sum?: AsmaulHusnaSumAggregateInputType
    _min?: AsmaulHusnaMinAggregateInputType
    _max?: AsmaulHusnaMaxAggregateInputType
  }

  export type AsmaulHusnaGroupByOutputType = {
    id: number
    latin: string
    arabic: string
    id_translation: string
    en_translation: string
    _count: AsmaulHusnaCountAggregateOutputType | null
    _avg: AsmaulHusnaAvgAggregateOutputType | null
    _sum: AsmaulHusnaSumAggregateOutputType | null
    _min: AsmaulHusnaMinAggregateOutputType | null
    _max: AsmaulHusnaMaxAggregateOutputType | null
  }

  type GetAsmaulHusnaGroupByPayload<T extends AsmaulHusnaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AsmaulHusnaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AsmaulHusnaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AsmaulHusnaGroupByOutputType[P]>
            : GetScalarType<T[P], AsmaulHusnaGroupByOutputType[P]>
        }
      >
    >


  export type AsmaulHusnaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    latin?: boolean
    arabic?: boolean
    id_translation?: boolean
    en_translation?: boolean
  }, ExtArgs["result"]["asmaulHusna"]>

  export type AsmaulHusnaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    latin?: boolean
    arabic?: boolean
    id_translation?: boolean
    en_translation?: boolean
  }, ExtArgs["result"]["asmaulHusna"]>

  export type AsmaulHusnaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    latin?: boolean
    arabic?: boolean
    id_translation?: boolean
    en_translation?: boolean
  }, ExtArgs["result"]["asmaulHusna"]>

  export type AsmaulHusnaSelectScalar = {
    id?: boolean
    latin?: boolean
    arabic?: boolean
    id_translation?: boolean
    en_translation?: boolean
  }

  export type AsmaulHusnaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "latin" | "arabic" | "id_translation" | "en_translation", ExtArgs["result"]["asmaulHusna"]>

  export type $AsmaulHusnaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AsmaulHusna"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      latin: string
      arabic: string
      id_translation: string
      en_translation: string
    }, ExtArgs["result"]["asmaulHusna"]>
    composites: {}
  }

  type AsmaulHusnaGetPayload<S extends boolean | null | undefined | AsmaulHusnaDefaultArgs> = $Result.GetResult<Prisma.$AsmaulHusnaPayload, S>

  type AsmaulHusnaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AsmaulHusnaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AsmaulHusnaCountAggregateInputType | true
    }

  export interface AsmaulHusnaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AsmaulHusna'], meta: { name: 'AsmaulHusna' } }
    /**
     * Find zero or one AsmaulHusna that matches the filter.
     * @param {AsmaulHusnaFindUniqueArgs} args - Arguments to find a AsmaulHusna
     * @example
     * // Get one AsmaulHusna
     * const asmaulHusna = await prisma.asmaulHusna.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AsmaulHusnaFindUniqueArgs>(args: SelectSubset<T, AsmaulHusnaFindUniqueArgs<ExtArgs>>): Prisma__AsmaulHusnaClient<$Result.GetResult<Prisma.$AsmaulHusnaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AsmaulHusna that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AsmaulHusnaFindUniqueOrThrowArgs} args - Arguments to find a AsmaulHusna
     * @example
     * // Get one AsmaulHusna
     * const asmaulHusna = await prisma.asmaulHusna.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AsmaulHusnaFindUniqueOrThrowArgs>(args: SelectSubset<T, AsmaulHusnaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AsmaulHusnaClient<$Result.GetResult<Prisma.$AsmaulHusnaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AsmaulHusna that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsmaulHusnaFindFirstArgs} args - Arguments to find a AsmaulHusna
     * @example
     * // Get one AsmaulHusna
     * const asmaulHusna = await prisma.asmaulHusna.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AsmaulHusnaFindFirstArgs>(args?: SelectSubset<T, AsmaulHusnaFindFirstArgs<ExtArgs>>): Prisma__AsmaulHusnaClient<$Result.GetResult<Prisma.$AsmaulHusnaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AsmaulHusna that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsmaulHusnaFindFirstOrThrowArgs} args - Arguments to find a AsmaulHusna
     * @example
     * // Get one AsmaulHusna
     * const asmaulHusna = await prisma.asmaulHusna.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AsmaulHusnaFindFirstOrThrowArgs>(args?: SelectSubset<T, AsmaulHusnaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AsmaulHusnaClient<$Result.GetResult<Prisma.$AsmaulHusnaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AsmaulHusnas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsmaulHusnaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AsmaulHusnas
     * const asmaulHusnas = await prisma.asmaulHusna.findMany()
     * 
     * // Get first 10 AsmaulHusnas
     * const asmaulHusnas = await prisma.asmaulHusna.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const asmaulHusnaWithIdOnly = await prisma.asmaulHusna.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AsmaulHusnaFindManyArgs>(args?: SelectSubset<T, AsmaulHusnaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsmaulHusnaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AsmaulHusna.
     * @param {AsmaulHusnaCreateArgs} args - Arguments to create a AsmaulHusna.
     * @example
     * // Create one AsmaulHusna
     * const AsmaulHusna = await prisma.asmaulHusna.create({
     *   data: {
     *     // ... data to create a AsmaulHusna
     *   }
     * })
     * 
     */
    create<T extends AsmaulHusnaCreateArgs>(args: SelectSubset<T, AsmaulHusnaCreateArgs<ExtArgs>>): Prisma__AsmaulHusnaClient<$Result.GetResult<Prisma.$AsmaulHusnaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AsmaulHusnas.
     * @param {AsmaulHusnaCreateManyArgs} args - Arguments to create many AsmaulHusnas.
     * @example
     * // Create many AsmaulHusnas
     * const asmaulHusna = await prisma.asmaulHusna.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AsmaulHusnaCreateManyArgs>(args?: SelectSubset<T, AsmaulHusnaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AsmaulHusnas and returns the data saved in the database.
     * @param {AsmaulHusnaCreateManyAndReturnArgs} args - Arguments to create many AsmaulHusnas.
     * @example
     * // Create many AsmaulHusnas
     * const asmaulHusna = await prisma.asmaulHusna.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AsmaulHusnas and only return the `id`
     * const asmaulHusnaWithIdOnly = await prisma.asmaulHusna.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AsmaulHusnaCreateManyAndReturnArgs>(args?: SelectSubset<T, AsmaulHusnaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsmaulHusnaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AsmaulHusna.
     * @param {AsmaulHusnaDeleteArgs} args - Arguments to delete one AsmaulHusna.
     * @example
     * // Delete one AsmaulHusna
     * const AsmaulHusna = await prisma.asmaulHusna.delete({
     *   where: {
     *     // ... filter to delete one AsmaulHusna
     *   }
     * })
     * 
     */
    delete<T extends AsmaulHusnaDeleteArgs>(args: SelectSubset<T, AsmaulHusnaDeleteArgs<ExtArgs>>): Prisma__AsmaulHusnaClient<$Result.GetResult<Prisma.$AsmaulHusnaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AsmaulHusna.
     * @param {AsmaulHusnaUpdateArgs} args - Arguments to update one AsmaulHusna.
     * @example
     * // Update one AsmaulHusna
     * const asmaulHusna = await prisma.asmaulHusna.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AsmaulHusnaUpdateArgs>(args: SelectSubset<T, AsmaulHusnaUpdateArgs<ExtArgs>>): Prisma__AsmaulHusnaClient<$Result.GetResult<Prisma.$AsmaulHusnaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AsmaulHusnas.
     * @param {AsmaulHusnaDeleteManyArgs} args - Arguments to filter AsmaulHusnas to delete.
     * @example
     * // Delete a few AsmaulHusnas
     * const { count } = await prisma.asmaulHusna.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AsmaulHusnaDeleteManyArgs>(args?: SelectSubset<T, AsmaulHusnaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AsmaulHusnas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsmaulHusnaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AsmaulHusnas
     * const asmaulHusna = await prisma.asmaulHusna.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AsmaulHusnaUpdateManyArgs>(args: SelectSubset<T, AsmaulHusnaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AsmaulHusnas and returns the data updated in the database.
     * @param {AsmaulHusnaUpdateManyAndReturnArgs} args - Arguments to update many AsmaulHusnas.
     * @example
     * // Update many AsmaulHusnas
     * const asmaulHusna = await prisma.asmaulHusna.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AsmaulHusnas and only return the `id`
     * const asmaulHusnaWithIdOnly = await prisma.asmaulHusna.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AsmaulHusnaUpdateManyAndReturnArgs>(args: SelectSubset<T, AsmaulHusnaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsmaulHusnaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AsmaulHusna.
     * @param {AsmaulHusnaUpsertArgs} args - Arguments to update or create a AsmaulHusna.
     * @example
     * // Update or create a AsmaulHusna
     * const asmaulHusna = await prisma.asmaulHusna.upsert({
     *   create: {
     *     // ... data to create a AsmaulHusna
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AsmaulHusna we want to update
     *   }
     * })
     */
    upsert<T extends AsmaulHusnaUpsertArgs>(args: SelectSubset<T, AsmaulHusnaUpsertArgs<ExtArgs>>): Prisma__AsmaulHusnaClient<$Result.GetResult<Prisma.$AsmaulHusnaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AsmaulHusnas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsmaulHusnaCountArgs} args - Arguments to filter AsmaulHusnas to count.
     * @example
     * // Count the number of AsmaulHusnas
     * const count = await prisma.asmaulHusna.count({
     *   where: {
     *     // ... the filter for the AsmaulHusnas we want to count
     *   }
     * })
    **/
    count<T extends AsmaulHusnaCountArgs>(
      args?: Subset<T, AsmaulHusnaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AsmaulHusnaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AsmaulHusna.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsmaulHusnaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AsmaulHusnaAggregateArgs>(args: Subset<T, AsmaulHusnaAggregateArgs>): Prisma.PrismaPromise<GetAsmaulHusnaAggregateType<T>>

    /**
     * Group by AsmaulHusna.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsmaulHusnaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AsmaulHusnaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AsmaulHusnaGroupByArgs['orderBy'] }
        : { orderBy?: AsmaulHusnaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AsmaulHusnaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsmaulHusnaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AsmaulHusna model
   */
  readonly fields: AsmaulHusnaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AsmaulHusna.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AsmaulHusnaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AsmaulHusna model
   */
  interface AsmaulHusnaFieldRefs {
    readonly id: FieldRef<"AsmaulHusna", 'Int'>
    readonly latin: FieldRef<"AsmaulHusna", 'String'>
    readonly arabic: FieldRef<"AsmaulHusna", 'String'>
    readonly id_translation: FieldRef<"AsmaulHusna", 'String'>
    readonly en_translation: FieldRef<"AsmaulHusna", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AsmaulHusna findUnique
   */
  export type AsmaulHusnaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsmaulHusna
     */
    select?: AsmaulHusnaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsmaulHusna
     */
    omit?: AsmaulHusnaOmit<ExtArgs> | null
    /**
     * Filter, which AsmaulHusna to fetch.
     */
    where: AsmaulHusnaWhereUniqueInput
  }

  /**
   * AsmaulHusna findUniqueOrThrow
   */
  export type AsmaulHusnaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsmaulHusna
     */
    select?: AsmaulHusnaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsmaulHusna
     */
    omit?: AsmaulHusnaOmit<ExtArgs> | null
    /**
     * Filter, which AsmaulHusna to fetch.
     */
    where: AsmaulHusnaWhereUniqueInput
  }

  /**
   * AsmaulHusna findFirst
   */
  export type AsmaulHusnaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsmaulHusna
     */
    select?: AsmaulHusnaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsmaulHusna
     */
    omit?: AsmaulHusnaOmit<ExtArgs> | null
    /**
     * Filter, which AsmaulHusna to fetch.
     */
    where?: AsmaulHusnaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsmaulHusnas to fetch.
     */
    orderBy?: AsmaulHusnaOrderByWithRelationInput | AsmaulHusnaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AsmaulHusnas.
     */
    cursor?: AsmaulHusnaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsmaulHusnas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsmaulHusnas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AsmaulHusnas.
     */
    distinct?: AsmaulHusnaScalarFieldEnum | AsmaulHusnaScalarFieldEnum[]
  }

  /**
   * AsmaulHusna findFirstOrThrow
   */
  export type AsmaulHusnaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsmaulHusna
     */
    select?: AsmaulHusnaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsmaulHusna
     */
    omit?: AsmaulHusnaOmit<ExtArgs> | null
    /**
     * Filter, which AsmaulHusna to fetch.
     */
    where?: AsmaulHusnaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsmaulHusnas to fetch.
     */
    orderBy?: AsmaulHusnaOrderByWithRelationInput | AsmaulHusnaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AsmaulHusnas.
     */
    cursor?: AsmaulHusnaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsmaulHusnas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsmaulHusnas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AsmaulHusnas.
     */
    distinct?: AsmaulHusnaScalarFieldEnum | AsmaulHusnaScalarFieldEnum[]
  }

  /**
   * AsmaulHusna findMany
   */
  export type AsmaulHusnaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsmaulHusna
     */
    select?: AsmaulHusnaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsmaulHusna
     */
    omit?: AsmaulHusnaOmit<ExtArgs> | null
    /**
     * Filter, which AsmaulHusnas to fetch.
     */
    where?: AsmaulHusnaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsmaulHusnas to fetch.
     */
    orderBy?: AsmaulHusnaOrderByWithRelationInput | AsmaulHusnaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AsmaulHusnas.
     */
    cursor?: AsmaulHusnaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsmaulHusnas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsmaulHusnas.
     */
    skip?: number
    distinct?: AsmaulHusnaScalarFieldEnum | AsmaulHusnaScalarFieldEnum[]
  }

  /**
   * AsmaulHusna create
   */
  export type AsmaulHusnaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsmaulHusna
     */
    select?: AsmaulHusnaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsmaulHusna
     */
    omit?: AsmaulHusnaOmit<ExtArgs> | null
    /**
     * The data needed to create a AsmaulHusna.
     */
    data: XOR<AsmaulHusnaCreateInput, AsmaulHusnaUncheckedCreateInput>
  }

  /**
   * AsmaulHusna createMany
   */
  export type AsmaulHusnaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AsmaulHusnas.
     */
    data: AsmaulHusnaCreateManyInput | AsmaulHusnaCreateManyInput[]
  }

  /**
   * AsmaulHusna createManyAndReturn
   */
  export type AsmaulHusnaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsmaulHusna
     */
    select?: AsmaulHusnaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AsmaulHusna
     */
    omit?: AsmaulHusnaOmit<ExtArgs> | null
    /**
     * The data used to create many AsmaulHusnas.
     */
    data: AsmaulHusnaCreateManyInput | AsmaulHusnaCreateManyInput[]
  }

  /**
   * AsmaulHusna update
   */
  export type AsmaulHusnaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsmaulHusna
     */
    select?: AsmaulHusnaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsmaulHusna
     */
    omit?: AsmaulHusnaOmit<ExtArgs> | null
    /**
     * The data needed to update a AsmaulHusna.
     */
    data: XOR<AsmaulHusnaUpdateInput, AsmaulHusnaUncheckedUpdateInput>
    /**
     * Choose, which AsmaulHusna to update.
     */
    where: AsmaulHusnaWhereUniqueInput
  }

  /**
   * AsmaulHusna updateMany
   */
  export type AsmaulHusnaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AsmaulHusnas.
     */
    data: XOR<AsmaulHusnaUpdateManyMutationInput, AsmaulHusnaUncheckedUpdateManyInput>
    /**
     * Filter which AsmaulHusnas to update
     */
    where?: AsmaulHusnaWhereInput
    /**
     * Limit how many AsmaulHusnas to update.
     */
    limit?: number
  }

  /**
   * AsmaulHusna updateManyAndReturn
   */
  export type AsmaulHusnaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsmaulHusna
     */
    select?: AsmaulHusnaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AsmaulHusna
     */
    omit?: AsmaulHusnaOmit<ExtArgs> | null
    /**
     * The data used to update AsmaulHusnas.
     */
    data: XOR<AsmaulHusnaUpdateManyMutationInput, AsmaulHusnaUncheckedUpdateManyInput>
    /**
     * Filter which AsmaulHusnas to update
     */
    where?: AsmaulHusnaWhereInput
    /**
     * Limit how many AsmaulHusnas to update.
     */
    limit?: number
  }

  /**
   * AsmaulHusna upsert
   */
  export type AsmaulHusnaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsmaulHusna
     */
    select?: AsmaulHusnaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsmaulHusna
     */
    omit?: AsmaulHusnaOmit<ExtArgs> | null
    /**
     * The filter to search for the AsmaulHusna to update in case it exists.
     */
    where: AsmaulHusnaWhereUniqueInput
    /**
     * In case the AsmaulHusna found by the `where` argument doesn't exist, create a new AsmaulHusna with this data.
     */
    create: XOR<AsmaulHusnaCreateInput, AsmaulHusnaUncheckedCreateInput>
    /**
     * In case the AsmaulHusna was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AsmaulHusnaUpdateInput, AsmaulHusnaUncheckedUpdateInput>
  }

  /**
   * AsmaulHusna delete
   */
  export type AsmaulHusnaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsmaulHusna
     */
    select?: AsmaulHusnaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsmaulHusna
     */
    omit?: AsmaulHusnaOmit<ExtArgs> | null
    /**
     * Filter which AsmaulHusna to delete.
     */
    where: AsmaulHusnaWhereUniqueInput
  }

  /**
   * AsmaulHusna deleteMany
   */
  export type AsmaulHusnaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AsmaulHusnas to delete
     */
    where?: AsmaulHusnaWhereInput
    /**
     * Limit how many AsmaulHusnas to delete.
     */
    limit?: number
  }

  /**
   * AsmaulHusna without action
   */
  export type AsmaulHusnaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsmaulHusna
     */
    select?: AsmaulHusnaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsmaulHusna
     */
    omit?: AsmaulHusnaOmit<ExtArgs> | null
  }


  /**
   * Model NiatSholat
   */

  export type AggregateNiatSholat = {
    _count: NiatSholatCountAggregateOutputType | null
    _avg: NiatSholatAvgAggregateOutputType | null
    _sum: NiatSholatSumAggregateOutputType | null
    _min: NiatSholatMinAggregateOutputType | null
    _max: NiatSholatMaxAggregateOutputType | null
  }

  export type NiatSholatAvgAggregateOutputType = {
    number: number | null
  }

  export type NiatSholatSumAggregateOutputType = {
    number: number | null
  }

  export type NiatSholatMinAggregateOutputType = {
    number: number | null
    name: string | null
    arabic: string | null
    latin: string | null
    translation: string | null
  }

  export type NiatSholatMaxAggregateOutputType = {
    number: number | null
    name: string | null
    arabic: string | null
    latin: string | null
    translation: string | null
  }

  export type NiatSholatCountAggregateOutputType = {
    number: number
    name: number
    arabic: number
    latin: number
    translation: number
    _all: number
  }


  export type NiatSholatAvgAggregateInputType = {
    number?: true
  }

  export type NiatSholatSumAggregateInputType = {
    number?: true
  }

  export type NiatSholatMinAggregateInputType = {
    number?: true
    name?: true
    arabic?: true
    latin?: true
    translation?: true
  }

  export type NiatSholatMaxAggregateInputType = {
    number?: true
    name?: true
    arabic?: true
    latin?: true
    translation?: true
  }

  export type NiatSholatCountAggregateInputType = {
    number?: true
    name?: true
    arabic?: true
    latin?: true
    translation?: true
    _all?: true
  }

  export type NiatSholatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NiatSholat to aggregate.
     */
    where?: NiatSholatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NiatSholats to fetch.
     */
    orderBy?: NiatSholatOrderByWithRelationInput | NiatSholatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NiatSholatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NiatSholats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NiatSholats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NiatSholats
    **/
    _count?: true | NiatSholatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NiatSholatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NiatSholatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NiatSholatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NiatSholatMaxAggregateInputType
  }

  export type GetNiatSholatAggregateType<T extends NiatSholatAggregateArgs> = {
        [P in keyof T & keyof AggregateNiatSholat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNiatSholat[P]>
      : GetScalarType<T[P], AggregateNiatSholat[P]>
  }




  export type NiatSholatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NiatSholatWhereInput
    orderBy?: NiatSholatOrderByWithAggregationInput | NiatSholatOrderByWithAggregationInput[]
    by: NiatSholatScalarFieldEnum[] | NiatSholatScalarFieldEnum
    having?: NiatSholatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NiatSholatCountAggregateInputType | true
    _avg?: NiatSholatAvgAggregateInputType
    _sum?: NiatSholatSumAggregateInputType
    _min?: NiatSholatMinAggregateInputType
    _max?: NiatSholatMaxAggregateInputType
  }

  export type NiatSholatGroupByOutputType = {
    number: number
    name: string
    arabic: string
    latin: string
    translation: string
    _count: NiatSholatCountAggregateOutputType | null
    _avg: NiatSholatAvgAggregateOutputType | null
    _sum: NiatSholatSumAggregateOutputType | null
    _min: NiatSholatMinAggregateOutputType | null
    _max: NiatSholatMaxAggregateOutputType | null
  }

  type GetNiatSholatGroupByPayload<T extends NiatSholatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NiatSholatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NiatSholatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NiatSholatGroupByOutputType[P]>
            : GetScalarType<T[P], NiatSholatGroupByOutputType[P]>
        }
      >
    >


  export type NiatSholatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    number?: boolean
    name?: boolean
    arabic?: boolean
    latin?: boolean
    translation?: boolean
  }, ExtArgs["result"]["niatSholat"]>

  export type NiatSholatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    number?: boolean
    name?: boolean
    arabic?: boolean
    latin?: boolean
    translation?: boolean
  }, ExtArgs["result"]["niatSholat"]>

  export type NiatSholatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    number?: boolean
    name?: boolean
    arabic?: boolean
    latin?: boolean
    translation?: boolean
  }, ExtArgs["result"]["niatSholat"]>

  export type NiatSholatSelectScalar = {
    number?: boolean
    name?: boolean
    arabic?: boolean
    latin?: boolean
    translation?: boolean
  }

  export type NiatSholatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"number" | "name" | "arabic" | "latin" | "translation", ExtArgs["result"]["niatSholat"]>

  export type $NiatSholatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NiatSholat"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      number: number
      name: string
      arabic: string
      latin: string
      translation: string
    }, ExtArgs["result"]["niatSholat"]>
    composites: {}
  }

  type NiatSholatGetPayload<S extends boolean | null | undefined | NiatSholatDefaultArgs> = $Result.GetResult<Prisma.$NiatSholatPayload, S>

  type NiatSholatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NiatSholatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NiatSholatCountAggregateInputType | true
    }

  export interface NiatSholatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NiatSholat'], meta: { name: 'NiatSholat' } }
    /**
     * Find zero or one NiatSholat that matches the filter.
     * @param {NiatSholatFindUniqueArgs} args - Arguments to find a NiatSholat
     * @example
     * // Get one NiatSholat
     * const niatSholat = await prisma.niatSholat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NiatSholatFindUniqueArgs>(args: SelectSubset<T, NiatSholatFindUniqueArgs<ExtArgs>>): Prisma__NiatSholatClient<$Result.GetResult<Prisma.$NiatSholatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NiatSholat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NiatSholatFindUniqueOrThrowArgs} args - Arguments to find a NiatSholat
     * @example
     * // Get one NiatSholat
     * const niatSholat = await prisma.niatSholat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NiatSholatFindUniqueOrThrowArgs>(args: SelectSubset<T, NiatSholatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NiatSholatClient<$Result.GetResult<Prisma.$NiatSholatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NiatSholat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NiatSholatFindFirstArgs} args - Arguments to find a NiatSholat
     * @example
     * // Get one NiatSholat
     * const niatSholat = await prisma.niatSholat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NiatSholatFindFirstArgs>(args?: SelectSubset<T, NiatSholatFindFirstArgs<ExtArgs>>): Prisma__NiatSholatClient<$Result.GetResult<Prisma.$NiatSholatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NiatSholat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NiatSholatFindFirstOrThrowArgs} args - Arguments to find a NiatSholat
     * @example
     * // Get one NiatSholat
     * const niatSholat = await prisma.niatSholat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NiatSholatFindFirstOrThrowArgs>(args?: SelectSubset<T, NiatSholatFindFirstOrThrowArgs<ExtArgs>>): Prisma__NiatSholatClient<$Result.GetResult<Prisma.$NiatSholatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NiatSholats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NiatSholatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NiatSholats
     * const niatSholats = await prisma.niatSholat.findMany()
     * 
     * // Get first 10 NiatSholats
     * const niatSholats = await prisma.niatSholat.findMany({ take: 10 })
     * 
     * // Only select the `number`
     * const niatSholatWithNumberOnly = await prisma.niatSholat.findMany({ select: { number: true } })
     * 
     */
    findMany<T extends NiatSholatFindManyArgs>(args?: SelectSubset<T, NiatSholatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NiatSholatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NiatSholat.
     * @param {NiatSholatCreateArgs} args - Arguments to create a NiatSholat.
     * @example
     * // Create one NiatSholat
     * const NiatSholat = await prisma.niatSholat.create({
     *   data: {
     *     // ... data to create a NiatSholat
     *   }
     * })
     * 
     */
    create<T extends NiatSholatCreateArgs>(args: SelectSubset<T, NiatSholatCreateArgs<ExtArgs>>): Prisma__NiatSholatClient<$Result.GetResult<Prisma.$NiatSholatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NiatSholats.
     * @param {NiatSholatCreateManyArgs} args - Arguments to create many NiatSholats.
     * @example
     * // Create many NiatSholats
     * const niatSholat = await prisma.niatSholat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NiatSholatCreateManyArgs>(args?: SelectSubset<T, NiatSholatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NiatSholats and returns the data saved in the database.
     * @param {NiatSholatCreateManyAndReturnArgs} args - Arguments to create many NiatSholats.
     * @example
     * // Create many NiatSholats
     * const niatSholat = await prisma.niatSholat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NiatSholats and only return the `number`
     * const niatSholatWithNumberOnly = await prisma.niatSholat.createManyAndReturn({
     *   select: { number: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NiatSholatCreateManyAndReturnArgs>(args?: SelectSubset<T, NiatSholatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NiatSholatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NiatSholat.
     * @param {NiatSholatDeleteArgs} args - Arguments to delete one NiatSholat.
     * @example
     * // Delete one NiatSholat
     * const NiatSholat = await prisma.niatSholat.delete({
     *   where: {
     *     // ... filter to delete one NiatSholat
     *   }
     * })
     * 
     */
    delete<T extends NiatSholatDeleteArgs>(args: SelectSubset<T, NiatSholatDeleteArgs<ExtArgs>>): Prisma__NiatSholatClient<$Result.GetResult<Prisma.$NiatSholatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NiatSholat.
     * @param {NiatSholatUpdateArgs} args - Arguments to update one NiatSholat.
     * @example
     * // Update one NiatSholat
     * const niatSholat = await prisma.niatSholat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NiatSholatUpdateArgs>(args: SelectSubset<T, NiatSholatUpdateArgs<ExtArgs>>): Prisma__NiatSholatClient<$Result.GetResult<Prisma.$NiatSholatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NiatSholats.
     * @param {NiatSholatDeleteManyArgs} args - Arguments to filter NiatSholats to delete.
     * @example
     * // Delete a few NiatSholats
     * const { count } = await prisma.niatSholat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NiatSholatDeleteManyArgs>(args?: SelectSubset<T, NiatSholatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NiatSholats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NiatSholatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NiatSholats
     * const niatSholat = await prisma.niatSholat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NiatSholatUpdateManyArgs>(args: SelectSubset<T, NiatSholatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NiatSholats and returns the data updated in the database.
     * @param {NiatSholatUpdateManyAndReturnArgs} args - Arguments to update many NiatSholats.
     * @example
     * // Update many NiatSholats
     * const niatSholat = await prisma.niatSholat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NiatSholats and only return the `number`
     * const niatSholatWithNumberOnly = await prisma.niatSholat.updateManyAndReturn({
     *   select: { number: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NiatSholatUpdateManyAndReturnArgs>(args: SelectSubset<T, NiatSholatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NiatSholatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NiatSholat.
     * @param {NiatSholatUpsertArgs} args - Arguments to update or create a NiatSholat.
     * @example
     * // Update or create a NiatSholat
     * const niatSholat = await prisma.niatSholat.upsert({
     *   create: {
     *     // ... data to create a NiatSholat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NiatSholat we want to update
     *   }
     * })
     */
    upsert<T extends NiatSholatUpsertArgs>(args: SelectSubset<T, NiatSholatUpsertArgs<ExtArgs>>): Prisma__NiatSholatClient<$Result.GetResult<Prisma.$NiatSholatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NiatSholats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NiatSholatCountArgs} args - Arguments to filter NiatSholats to count.
     * @example
     * // Count the number of NiatSholats
     * const count = await prisma.niatSholat.count({
     *   where: {
     *     // ... the filter for the NiatSholats we want to count
     *   }
     * })
    **/
    count<T extends NiatSholatCountArgs>(
      args?: Subset<T, NiatSholatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NiatSholatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NiatSholat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NiatSholatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NiatSholatAggregateArgs>(args: Subset<T, NiatSholatAggregateArgs>): Prisma.PrismaPromise<GetNiatSholatAggregateType<T>>

    /**
     * Group by NiatSholat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NiatSholatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NiatSholatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NiatSholatGroupByArgs['orderBy'] }
        : { orderBy?: NiatSholatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NiatSholatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNiatSholatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NiatSholat model
   */
  readonly fields: NiatSholatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NiatSholat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NiatSholatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NiatSholat model
   */
  interface NiatSholatFieldRefs {
    readonly number: FieldRef<"NiatSholat", 'Int'>
    readonly name: FieldRef<"NiatSholat", 'String'>
    readonly arabic: FieldRef<"NiatSholat", 'String'>
    readonly latin: FieldRef<"NiatSholat", 'String'>
    readonly translation: FieldRef<"NiatSholat", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NiatSholat findUnique
   */
  export type NiatSholatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NiatSholat
     */
    select?: NiatSholatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NiatSholat
     */
    omit?: NiatSholatOmit<ExtArgs> | null
    /**
     * Filter, which NiatSholat to fetch.
     */
    where: NiatSholatWhereUniqueInput
  }

  /**
   * NiatSholat findUniqueOrThrow
   */
  export type NiatSholatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NiatSholat
     */
    select?: NiatSholatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NiatSholat
     */
    omit?: NiatSholatOmit<ExtArgs> | null
    /**
     * Filter, which NiatSholat to fetch.
     */
    where: NiatSholatWhereUniqueInput
  }

  /**
   * NiatSholat findFirst
   */
  export type NiatSholatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NiatSholat
     */
    select?: NiatSholatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NiatSholat
     */
    omit?: NiatSholatOmit<ExtArgs> | null
    /**
     * Filter, which NiatSholat to fetch.
     */
    where?: NiatSholatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NiatSholats to fetch.
     */
    orderBy?: NiatSholatOrderByWithRelationInput | NiatSholatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NiatSholats.
     */
    cursor?: NiatSholatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NiatSholats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NiatSholats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NiatSholats.
     */
    distinct?: NiatSholatScalarFieldEnum | NiatSholatScalarFieldEnum[]
  }

  /**
   * NiatSholat findFirstOrThrow
   */
  export type NiatSholatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NiatSholat
     */
    select?: NiatSholatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NiatSholat
     */
    omit?: NiatSholatOmit<ExtArgs> | null
    /**
     * Filter, which NiatSholat to fetch.
     */
    where?: NiatSholatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NiatSholats to fetch.
     */
    orderBy?: NiatSholatOrderByWithRelationInput | NiatSholatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NiatSholats.
     */
    cursor?: NiatSholatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NiatSholats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NiatSholats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NiatSholats.
     */
    distinct?: NiatSholatScalarFieldEnum | NiatSholatScalarFieldEnum[]
  }

  /**
   * NiatSholat findMany
   */
  export type NiatSholatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NiatSholat
     */
    select?: NiatSholatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NiatSholat
     */
    omit?: NiatSholatOmit<ExtArgs> | null
    /**
     * Filter, which NiatSholats to fetch.
     */
    where?: NiatSholatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NiatSholats to fetch.
     */
    orderBy?: NiatSholatOrderByWithRelationInput | NiatSholatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NiatSholats.
     */
    cursor?: NiatSholatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NiatSholats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NiatSholats.
     */
    skip?: number
    distinct?: NiatSholatScalarFieldEnum | NiatSholatScalarFieldEnum[]
  }

  /**
   * NiatSholat create
   */
  export type NiatSholatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NiatSholat
     */
    select?: NiatSholatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NiatSholat
     */
    omit?: NiatSholatOmit<ExtArgs> | null
    /**
     * The data needed to create a NiatSholat.
     */
    data: XOR<NiatSholatCreateInput, NiatSholatUncheckedCreateInput>
  }

  /**
   * NiatSholat createMany
   */
  export type NiatSholatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NiatSholats.
     */
    data: NiatSholatCreateManyInput | NiatSholatCreateManyInput[]
  }

  /**
   * NiatSholat createManyAndReturn
   */
  export type NiatSholatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NiatSholat
     */
    select?: NiatSholatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NiatSholat
     */
    omit?: NiatSholatOmit<ExtArgs> | null
    /**
     * The data used to create many NiatSholats.
     */
    data: NiatSholatCreateManyInput | NiatSholatCreateManyInput[]
  }

  /**
   * NiatSholat update
   */
  export type NiatSholatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NiatSholat
     */
    select?: NiatSholatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NiatSholat
     */
    omit?: NiatSholatOmit<ExtArgs> | null
    /**
     * The data needed to update a NiatSholat.
     */
    data: XOR<NiatSholatUpdateInput, NiatSholatUncheckedUpdateInput>
    /**
     * Choose, which NiatSholat to update.
     */
    where: NiatSholatWhereUniqueInput
  }

  /**
   * NiatSholat updateMany
   */
  export type NiatSholatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NiatSholats.
     */
    data: XOR<NiatSholatUpdateManyMutationInput, NiatSholatUncheckedUpdateManyInput>
    /**
     * Filter which NiatSholats to update
     */
    where?: NiatSholatWhereInput
    /**
     * Limit how many NiatSholats to update.
     */
    limit?: number
  }

  /**
   * NiatSholat updateManyAndReturn
   */
  export type NiatSholatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NiatSholat
     */
    select?: NiatSholatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NiatSholat
     */
    omit?: NiatSholatOmit<ExtArgs> | null
    /**
     * The data used to update NiatSholats.
     */
    data: XOR<NiatSholatUpdateManyMutationInput, NiatSholatUncheckedUpdateManyInput>
    /**
     * Filter which NiatSholats to update
     */
    where?: NiatSholatWhereInput
    /**
     * Limit how many NiatSholats to update.
     */
    limit?: number
  }

  /**
   * NiatSholat upsert
   */
  export type NiatSholatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NiatSholat
     */
    select?: NiatSholatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NiatSholat
     */
    omit?: NiatSholatOmit<ExtArgs> | null
    /**
     * The filter to search for the NiatSholat to update in case it exists.
     */
    where: NiatSholatWhereUniqueInput
    /**
     * In case the NiatSholat found by the `where` argument doesn't exist, create a new NiatSholat with this data.
     */
    create: XOR<NiatSholatCreateInput, NiatSholatUncheckedCreateInput>
    /**
     * In case the NiatSholat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NiatSholatUpdateInput, NiatSholatUncheckedUpdateInput>
  }

  /**
   * NiatSholat delete
   */
  export type NiatSholatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NiatSholat
     */
    select?: NiatSholatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NiatSholat
     */
    omit?: NiatSholatOmit<ExtArgs> | null
    /**
     * Filter which NiatSholat to delete.
     */
    where: NiatSholatWhereUniqueInput
  }

  /**
   * NiatSholat deleteMany
   */
  export type NiatSholatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NiatSholats to delete
     */
    where?: NiatSholatWhereInput
    /**
     * Limit how many NiatSholats to delete.
     */
    limit?: number
  }

  /**
   * NiatSholat without action
   */
  export type NiatSholatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NiatSholat
     */
    select?: NiatSholatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NiatSholat
     */
    omit?: NiatSholatOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SurahScalarFieldEnum: {
    id: 'id',
    sequence: 'sequence',
    number_of_verses: 'number_of_verses',
    name_short: 'name_short',
    name_long: 'name_long',
    name_en: 'name_en',
    name_id: 'name_id',
    translation_en: 'translation_en',
    translation_id: 'translation_id',
    revelation: 'revelation',
    revelation_en: 'revelation_en',
    revelation_id: 'revelation_id',
    tafsir: 'tafsir',
    audio_url: 'audio_url'
  };

  export type SurahScalarFieldEnum = (typeof SurahScalarFieldEnum)[keyof typeof SurahScalarFieldEnum]


  export const AyatScalarFieldEnum: {
    id: 'id',
    surah_number: 'surah_number',
    ayat_number: 'ayat_number',
    arabic: 'arabic',
    kitabah: 'kitabah',
    latin: 'latin',
    translation: 'translation'
  };

  export type AyatScalarFieldEnum = (typeof AyatScalarFieldEnum)[keyof typeof AyatScalarFieldEnum]


  export const HaditsScalarFieldEnum: {
    slug: 'slug',
    name: 'name',
    total: 'total'
  };

  export type HaditsScalarFieldEnum = (typeof HaditsScalarFieldEnum)[keyof typeof HaditsScalarFieldEnum]


  export const DetailHaditsScalarFieldEnum: {
    id: 'id',
    number: 'number',
    arab: 'arab',
    terjemah: 'terjemah',
    slug: 'slug'
  };

  export type DetailHaditsScalarFieldEnum = (typeof DetailHaditsScalarFieldEnum)[keyof typeof DetailHaditsScalarFieldEnum]


  export const AsmaulHusnaScalarFieldEnum: {
    id: 'id',
    latin: 'latin',
    arabic: 'arabic',
    id_translation: 'id_translation',
    en_translation: 'en_translation'
  };

  export type AsmaulHusnaScalarFieldEnum = (typeof AsmaulHusnaScalarFieldEnum)[keyof typeof AsmaulHusnaScalarFieldEnum]


  export const NiatSholatScalarFieldEnum: {
    number: 'number',
    name: 'name',
    arabic: 'arabic',
    latin: 'latin',
    translation: 'translation'
  };

  export type NiatSholatScalarFieldEnum = (typeof NiatSholatScalarFieldEnum)[keyof typeof NiatSholatScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type SurahWhereInput = {
    AND?: SurahWhereInput | SurahWhereInput[]
    OR?: SurahWhereInput[]
    NOT?: SurahWhereInput | SurahWhereInput[]
    id?: IntFilter<"Surah"> | number
    sequence?: IntFilter<"Surah"> | number
    number_of_verses?: IntFilter<"Surah"> | number
    name_short?: StringFilter<"Surah"> | string
    name_long?: StringFilter<"Surah"> | string
    name_en?: StringFilter<"Surah"> | string
    name_id?: StringFilter<"Surah"> | string
    translation_en?: StringFilter<"Surah"> | string
    translation_id?: StringFilter<"Surah"> | string
    revelation?: StringFilter<"Surah"> | string
    revelation_en?: StringFilter<"Surah"> | string
    revelation_id?: StringFilter<"Surah"> | string
    tafsir?: StringFilter<"Surah"> | string
    audio_url?: StringFilter<"Surah"> | string
    ayat?: AyatListRelationFilter
  }

  export type SurahOrderByWithRelationInput = {
    id?: SortOrder
    sequence?: SortOrder
    number_of_verses?: SortOrder
    name_short?: SortOrder
    name_long?: SortOrder
    name_en?: SortOrder
    name_id?: SortOrder
    translation_en?: SortOrder
    translation_id?: SortOrder
    revelation?: SortOrder
    revelation_en?: SortOrder
    revelation_id?: SortOrder
    tafsir?: SortOrder
    audio_url?: SortOrder
    ayat?: AyatOrderByRelationAggregateInput
  }

  export type SurahWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SurahWhereInput | SurahWhereInput[]
    OR?: SurahWhereInput[]
    NOT?: SurahWhereInput | SurahWhereInput[]
    sequence?: IntFilter<"Surah"> | number
    number_of_verses?: IntFilter<"Surah"> | number
    name_short?: StringFilter<"Surah"> | string
    name_long?: StringFilter<"Surah"> | string
    name_en?: StringFilter<"Surah"> | string
    name_id?: StringFilter<"Surah"> | string
    translation_en?: StringFilter<"Surah"> | string
    translation_id?: StringFilter<"Surah"> | string
    revelation?: StringFilter<"Surah"> | string
    revelation_en?: StringFilter<"Surah"> | string
    revelation_id?: StringFilter<"Surah"> | string
    tafsir?: StringFilter<"Surah"> | string
    audio_url?: StringFilter<"Surah"> | string
    ayat?: AyatListRelationFilter
  }, "id">

  export type SurahOrderByWithAggregationInput = {
    id?: SortOrder
    sequence?: SortOrder
    number_of_verses?: SortOrder
    name_short?: SortOrder
    name_long?: SortOrder
    name_en?: SortOrder
    name_id?: SortOrder
    translation_en?: SortOrder
    translation_id?: SortOrder
    revelation?: SortOrder
    revelation_en?: SortOrder
    revelation_id?: SortOrder
    tafsir?: SortOrder
    audio_url?: SortOrder
    _count?: SurahCountOrderByAggregateInput
    _avg?: SurahAvgOrderByAggregateInput
    _max?: SurahMaxOrderByAggregateInput
    _min?: SurahMinOrderByAggregateInput
    _sum?: SurahSumOrderByAggregateInput
  }

  export type SurahScalarWhereWithAggregatesInput = {
    AND?: SurahScalarWhereWithAggregatesInput | SurahScalarWhereWithAggregatesInput[]
    OR?: SurahScalarWhereWithAggregatesInput[]
    NOT?: SurahScalarWhereWithAggregatesInput | SurahScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Surah"> | number
    sequence?: IntWithAggregatesFilter<"Surah"> | number
    number_of_verses?: IntWithAggregatesFilter<"Surah"> | number
    name_short?: StringWithAggregatesFilter<"Surah"> | string
    name_long?: StringWithAggregatesFilter<"Surah"> | string
    name_en?: StringWithAggregatesFilter<"Surah"> | string
    name_id?: StringWithAggregatesFilter<"Surah"> | string
    translation_en?: StringWithAggregatesFilter<"Surah"> | string
    translation_id?: StringWithAggregatesFilter<"Surah"> | string
    revelation?: StringWithAggregatesFilter<"Surah"> | string
    revelation_en?: StringWithAggregatesFilter<"Surah"> | string
    revelation_id?: StringWithAggregatesFilter<"Surah"> | string
    tafsir?: StringWithAggregatesFilter<"Surah"> | string
    audio_url?: StringWithAggregatesFilter<"Surah"> | string
  }

  export type AyatWhereInput = {
    AND?: AyatWhereInput | AyatWhereInput[]
    OR?: AyatWhereInput[]
    NOT?: AyatWhereInput | AyatWhereInput[]
    id?: IntFilter<"Ayat"> | number
    surah_number?: IntFilter<"Ayat"> | number
    ayat_number?: IntFilter<"Ayat"> | number
    arabic?: StringFilter<"Ayat"> | string
    kitabah?: StringFilter<"Ayat"> | string
    latin?: StringFilter<"Ayat"> | string
    translation?: StringFilter<"Ayat"> | string
    surah?: XOR<SurahScalarRelationFilter, SurahWhereInput>
  }

  export type AyatOrderByWithRelationInput = {
    id?: SortOrder
    surah_number?: SortOrder
    ayat_number?: SortOrder
    arabic?: SortOrder
    kitabah?: SortOrder
    latin?: SortOrder
    translation?: SortOrder
    surah?: SurahOrderByWithRelationInput
  }

  export type AyatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AyatWhereInput | AyatWhereInput[]
    OR?: AyatWhereInput[]
    NOT?: AyatWhereInput | AyatWhereInput[]
    surah_number?: IntFilter<"Ayat"> | number
    ayat_number?: IntFilter<"Ayat"> | number
    arabic?: StringFilter<"Ayat"> | string
    kitabah?: StringFilter<"Ayat"> | string
    latin?: StringFilter<"Ayat"> | string
    translation?: StringFilter<"Ayat"> | string
    surah?: XOR<SurahScalarRelationFilter, SurahWhereInput>
  }, "id">

  export type AyatOrderByWithAggregationInput = {
    id?: SortOrder
    surah_number?: SortOrder
    ayat_number?: SortOrder
    arabic?: SortOrder
    kitabah?: SortOrder
    latin?: SortOrder
    translation?: SortOrder
    _count?: AyatCountOrderByAggregateInput
    _avg?: AyatAvgOrderByAggregateInput
    _max?: AyatMaxOrderByAggregateInput
    _min?: AyatMinOrderByAggregateInput
    _sum?: AyatSumOrderByAggregateInput
  }

  export type AyatScalarWhereWithAggregatesInput = {
    AND?: AyatScalarWhereWithAggregatesInput | AyatScalarWhereWithAggregatesInput[]
    OR?: AyatScalarWhereWithAggregatesInput[]
    NOT?: AyatScalarWhereWithAggregatesInput | AyatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ayat"> | number
    surah_number?: IntWithAggregatesFilter<"Ayat"> | number
    ayat_number?: IntWithAggregatesFilter<"Ayat"> | number
    arabic?: StringWithAggregatesFilter<"Ayat"> | string
    kitabah?: StringWithAggregatesFilter<"Ayat"> | string
    latin?: StringWithAggregatesFilter<"Ayat"> | string
    translation?: StringWithAggregatesFilter<"Ayat"> | string
  }

  export type HaditsWhereInput = {
    AND?: HaditsWhereInput | HaditsWhereInput[]
    OR?: HaditsWhereInput[]
    NOT?: HaditsWhereInput | HaditsWhereInput[]
    slug?: StringFilter<"Hadits"> | string
    name?: StringFilter<"Hadits"> | string
    total?: IntFilter<"Hadits"> | number
    details?: DetailHaditsListRelationFilter
  }

  export type HaditsOrderByWithRelationInput = {
    slug?: SortOrder
    name?: SortOrder
    total?: SortOrder
    details?: DetailHaditsOrderByRelationAggregateInput
  }

  export type HaditsWhereUniqueInput = Prisma.AtLeast<{
    slug?: string
    AND?: HaditsWhereInput | HaditsWhereInput[]
    OR?: HaditsWhereInput[]
    NOT?: HaditsWhereInput | HaditsWhereInput[]
    name?: StringFilter<"Hadits"> | string
    total?: IntFilter<"Hadits"> | number
    details?: DetailHaditsListRelationFilter
  }, "slug">

  export type HaditsOrderByWithAggregationInput = {
    slug?: SortOrder
    name?: SortOrder
    total?: SortOrder
    _count?: HaditsCountOrderByAggregateInput
    _avg?: HaditsAvgOrderByAggregateInput
    _max?: HaditsMaxOrderByAggregateInput
    _min?: HaditsMinOrderByAggregateInput
    _sum?: HaditsSumOrderByAggregateInput
  }

  export type HaditsScalarWhereWithAggregatesInput = {
    AND?: HaditsScalarWhereWithAggregatesInput | HaditsScalarWhereWithAggregatesInput[]
    OR?: HaditsScalarWhereWithAggregatesInput[]
    NOT?: HaditsScalarWhereWithAggregatesInput | HaditsScalarWhereWithAggregatesInput[]
    slug?: StringWithAggregatesFilter<"Hadits"> | string
    name?: StringWithAggregatesFilter<"Hadits"> | string
    total?: IntWithAggregatesFilter<"Hadits"> | number
  }

  export type DetailHaditsWhereInput = {
    AND?: DetailHaditsWhereInput | DetailHaditsWhereInput[]
    OR?: DetailHaditsWhereInput[]
    NOT?: DetailHaditsWhereInput | DetailHaditsWhereInput[]
    id?: IntFilter<"DetailHadits"> | number
    number?: IntFilter<"DetailHadits"> | number
    arab?: StringFilter<"DetailHadits"> | string
    terjemah?: StringFilter<"DetailHadits"> | string
    slug?: StringFilter<"DetailHadits"> | string
    rawi?: XOR<HaditsScalarRelationFilter, HaditsWhereInput>
  }

  export type DetailHaditsOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    arab?: SortOrder
    terjemah?: SortOrder
    slug?: SortOrder
    rawi?: HaditsOrderByWithRelationInput
  }

  export type DetailHaditsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DetailHaditsWhereInput | DetailHaditsWhereInput[]
    OR?: DetailHaditsWhereInput[]
    NOT?: DetailHaditsWhereInput | DetailHaditsWhereInput[]
    number?: IntFilter<"DetailHadits"> | number
    arab?: StringFilter<"DetailHadits"> | string
    terjemah?: StringFilter<"DetailHadits"> | string
    slug?: StringFilter<"DetailHadits"> | string
    rawi?: XOR<HaditsScalarRelationFilter, HaditsWhereInput>
  }, "id">

  export type DetailHaditsOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    arab?: SortOrder
    terjemah?: SortOrder
    slug?: SortOrder
    _count?: DetailHaditsCountOrderByAggregateInput
    _avg?: DetailHaditsAvgOrderByAggregateInput
    _max?: DetailHaditsMaxOrderByAggregateInput
    _min?: DetailHaditsMinOrderByAggregateInput
    _sum?: DetailHaditsSumOrderByAggregateInput
  }

  export type DetailHaditsScalarWhereWithAggregatesInput = {
    AND?: DetailHaditsScalarWhereWithAggregatesInput | DetailHaditsScalarWhereWithAggregatesInput[]
    OR?: DetailHaditsScalarWhereWithAggregatesInput[]
    NOT?: DetailHaditsScalarWhereWithAggregatesInput | DetailHaditsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DetailHadits"> | number
    number?: IntWithAggregatesFilter<"DetailHadits"> | number
    arab?: StringWithAggregatesFilter<"DetailHadits"> | string
    terjemah?: StringWithAggregatesFilter<"DetailHadits"> | string
    slug?: StringWithAggregatesFilter<"DetailHadits"> | string
  }

  export type AsmaulHusnaWhereInput = {
    AND?: AsmaulHusnaWhereInput | AsmaulHusnaWhereInput[]
    OR?: AsmaulHusnaWhereInput[]
    NOT?: AsmaulHusnaWhereInput | AsmaulHusnaWhereInput[]
    id?: IntFilter<"AsmaulHusna"> | number
    latin?: StringFilter<"AsmaulHusna"> | string
    arabic?: StringFilter<"AsmaulHusna"> | string
    id_translation?: StringFilter<"AsmaulHusna"> | string
    en_translation?: StringFilter<"AsmaulHusna"> | string
  }

  export type AsmaulHusnaOrderByWithRelationInput = {
    id?: SortOrder
    latin?: SortOrder
    arabic?: SortOrder
    id_translation?: SortOrder
    en_translation?: SortOrder
  }

  export type AsmaulHusnaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AsmaulHusnaWhereInput | AsmaulHusnaWhereInput[]
    OR?: AsmaulHusnaWhereInput[]
    NOT?: AsmaulHusnaWhereInput | AsmaulHusnaWhereInput[]
    latin?: StringFilter<"AsmaulHusna"> | string
    arabic?: StringFilter<"AsmaulHusna"> | string
    id_translation?: StringFilter<"AsmaulHusna"> | string
    en_translation?: StringFilter<"AsmaulHusna"> | string
  }, "id">

  export type AsmaulHusnaOrderByWithAggregationInput = {
    id?: SortOrder
    latin?: SortOrder
    arabic?: SortOrder
    id_translation?: SortOrder
    en_translation?: SortOrder
    _count?: AsmaulHusnaCountOrderByAggregateInput
    _avg?: AsmaulHusnaAvgOrderByAggregateInput
    _max?: AsmaulHusnaMaxOrderByAggregateInput
    _min?: AsmaulHusnaMinOrderByAggregateInput
    _sum?: AsmaulHusnaSumOrderByAggregateInput
  }

  export type AsmaulHusnaScalarWhereWithAggregatesInput = {
    AND?: AsmaulHusnaScalarWhereWithAggregatesInput | AsmaulHusnaScalarWhereWithAggregatesInput[]
    OR?: AsmaulHusnaScalarWhereWithAggregatesInput[]
    NOT?: AsmaulHusnaScalarWhereWithAggregatesInput | AsmaulHusnaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AsmaulHusna"> | number
    latin?: StringWithAggregatesFilter<"AsmaulHusna"> | string
    arabic?: StringWithAggregatesFilter<"AsmaulHusna"> | string
    id_translation?: StringWithAggregatesFilter<"AsmaulHusna"> | string
    en_translation?: StringWithAggregatesFilter<"AsmaulHusna"> | string
  }

  export type NiatSholatWhereInput = {
    AND?: NiatSholatWhereInput | NiatSholatWhereInput[]
    OR?: NiatSholatWhereInput[]
    NOT?: NiatSholatWhereInput | NiatSholatWhereInput[]
    number?: IntFilter<"NiatSholat"> | number
    name?: StringFilter<"NiatSholat"> | string
    arabic?: StringFilter<"NiatSholat"> | string
    latin?: StringFilter<"NiatSholat"> | string
    translation?: StringFilter<"NiatSholat"> | string
  }

  export type NiatSholatOrderByWithRelationInput = {
    number?: SortOrder
    name?: SortOrder
    arabic?: SortOrder
    latin?: SortOrder
    translation?: SortOrder
  }

  export type NiatSholatWhereUniqueInput = Prisma.AtLeast<{
    number?: number
    AND?: NiatSholatWhereInput | NiatSholatWhereInput[]
    OR?: NiatSholatWhereInput[]
    NOT?: NiatSholatWhereInput | NiatSholatWhereInput[]
    name?: StringFilter<"NiatSholat"> | string
    arabic?: StringFilter<"NiatSholat"> | string
    latin?: StringFilter<"NiatSholat"> | string
    translation?: StringFilter<"NiatSholat"> | string
  }, "number">

  export type NiatSholatOrderByWithAggregationInput = {
    number?: SortOrder
    name?: SortOrder
    arabic?: SortOrder
    latin?: SortOrder
    translation?: SortOrder
    _count?: NiatSholatCountOrderByAggregateInput
    _avg?: NiatSholatAvgOrderByAggregateInput
    _max?: NiatSholatMaxOrderByAggregateInput
    _min?: NiatSholatMinOrderByAggregateInput
    _sum?: NiatSholatSumOrderByAggregateInput
  }

  export type NiatSholatScalarWhereWithAggregatesInput = {
    AND?: NiatSholatScalarWhereWithAggregatesInput | NiatSholatScalarWhereWithAggregatesInput[]
    OR?: NiatSholatScalarWhereWithAggregatesInput[]
    NOT?: NiatSholatScalarWhereWithAggregatesInput | NiatSholatScalarWhereWithAggregatesInput[]
    number?: IntWithAggregatesFilter<"NiatSholat"> | number
    name?: StringWithAggregatesFilter<"NiatSholat"> | string
    arabic?: StringWithAggregatesFilter<"NiatSholat"> | string
    latin?: StringWithAggregatesFilter<"NiatSholat"> | string
    translation?: StringWithAggregatesFilter<"NiatSholat"> | string
  }

  export type SurahCreateInput = {
    id: number
    sequence: number
    number_of_verses: number
    name_short: string
    name_long: string
    name_en: string
    name_id: string
    translation_en: string
    translation_id: string
    revelation: string
    revelation_en: string
    revelation_id: string
    tafsir: string
    audio_url: string
    ayat?: AyatCreateNestedManyWithoutSurahInput
  }

  export type SurahUncheckedCreateInput = {
    id: number
    sequence: number
    number_of_verses: number
    name_short: string
    name_long: string
    name_en: string
    name_id: string
    translation_en: string
    translation_id: string
    revelation: string
    revelation_en: string
    revelation_id: string
    tafsir: string
    audio_url: string
    ayat?: AyatUncheckedCreateNestedManyWithoutSurahInput
  }

  export type SurahUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sequence?: IntFieldUpdateOperationsInput | number
    number_of_verses?: IntFieldUpdateOperationsInput | number
    name_short?: StringFieldUpdateOperationsInput | string
    name_long?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    translation_en?: StringFieldUpdateOperationsInput | string
    translation_id?: StringFieldUpdateOperationsInput | string
    revelation?: StringFieldUpdateOperationsInput | string
    revelation_en?: StringFieldUpdateOperationsInput | string
    revelation_id?: StringFieldUpdateOperationsInput | string
    tafsir?: StringFieldUpdateOperationsInput | string
    audio_url?: StringFieldUpdateOperationsInput | string
    ayat?: AyatUpdateManyWithoutSurahNestedInput
  }

  export type SurahUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sequence?: IntFieldUpdateOperationsInput | number
    number_of_verses?: IntFieldUpdateOperationsInput | number
    name_short?: StringFieldUpdateOperationsInput | string
    name_long?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    translation_en?: StringFieldUpdateOperationsInput | string
    translation_id?: StringFieldUpdateOperationsInput | string
    revelation?: StringFieldUpdateOperationsInput | string
    revelation_en?: StringFieldUpdateOperationsInput | string
    revelation_id?: StringFieldUpdateOperationsInput | string
    tafsir?: StringFieldUpdateOperationsInput | string
    audio_url?: StringFieldUpdateOperationsInput | string
    ayat?: AyatUncheckedUpdateManyWithoutSurahNestedInput
  }

  export type SurahCreateManyInput = {
    id: number
    sequence: number
    number_of_verses: number
    name_short: string
    name_long: string
    name_en: string
    name_id: string
    translation_en: string
    translation_id: string
    revelation: string
    revelation_en: string
    revelation_id: string
    tafsir: string
    audio_url: string
  }

  export type SurahUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    sequence?: IntFieldUpdateOperationsInput | number
    number_of_verses?: IntFieldUpdateOperationsInput | number
    name_short?: StringFieldUpdateOperationsInput | string
    name_long?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    translation_en?: StringFieldUpdateOperationsInput | string
    translation_id?: StringFieldUpdateOperationsInput | string
    revelation?: StringFieldUpdateOperationsInput | string
    revelation_en?: StringFieldUpdateOperationsInput | string
    revelation_id?: StringFieldUpdateOperationsInput | string
    tafsir?: StringFieldUpdateOperationsInput | string
    audio_url?: StringFieldUpdateOperationsInput | string
  }

  export type SurahUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sequence?: IntFieldUpdateOperationsInput | number
    number_of_verses?: IntFieldUpdateOperationsInput | number
    name_short?: StringFieldUpdateOperationsInput | string
    name_long?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    translation_en?: StringFieldUpdateOperationsInput | string
    translation_id?: StringFieldUpdateOperationsInput | string
    revelation?: StringFieldUpdateOperationsInput | string
    revelation_en?: StringFieldUpdateOperationsInput | string
    revelation_id?: StringFieldUpdateOperationsInput | string
    tafsir?: StringFieldUpdateOperationsInput | string
    audio_url?: StringFieldUpdateOperationsInput | string
  }

  export type AyatCreateInput = {
    id: number
    ayat_number: number
    arabic: string
    kitabah: string
    latin: string
    translation: string
    surah: SurahCreateNestedOneWithoutAyatInput
  }

  export type AyatUncheckedCreateInput = {
    id: number
    surah_number: number
    ayat_number: number
    arabic: string
    kitabah: string
    latin: string
    translation: string
  }

  export type AyatUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ayat_number?: IntFieldUpdateOperationsInput | number
    arabic?: StringFieldUpdateOperationsInput | string
    kitabah?: StringFieldUpdateOperationsInput | string
    latin?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
    surah?: SurahUpdateOneRequiredWithoutAyatNestedInput
  }

  export type AyatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    surah_number?: IntFieldUpdateOperationsInput | number
    ayat_number?: IntFieldUpdateOperationsInput | number
    arabic?: StringFieldUpdateOperationsInput | string
    kitabah?: StringFieldUpdateOperationsInput | string
    latin?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
  }

  export type AyatCreateManyInput = {
    id: number
    surah_number: number
    ayat_number: number
    arabic: string
    kitabah: string
    latin: string
    translation: string
  }

  export type AyatUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    ayat_number?: IntFieldUpdateOperationsInput | number
    arabic?: StringFieldUpdateOperationsInput | string
    kitabah?: StringFieldUpdateOperationsInput | string
    latin?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
  }

  export type AyatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    surah_number?: IntFieldUpdateOperationsInput | number
    ayat_number?: IntFieldUpdateOperationsInput | number
    arabic?: StringFieldUpdateOperationsInput | string
    kitabah?: StringFieldUpdateOperationsInput | string
    latin?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
  }

  export type HaditsCreateInput = {
    slug: string
    name: string
    total: number
    details?: DetailHaditsCreateNestedManyWithoutRawiInput
  }

  export type HaditsUncheckedCreateInput = {
    slug: string
    name: string
    total: number
    details?: DetailHaditsUncheckedCreateNestedManyWithoutRawiInput
  }

  export type HaditsUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    details?: DetailHaditsUpdateManyWithoutRawiNestedInput
  }

  export type HaditsUncheckedUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    details?: DetailHaditsUncheckedUpdateManyWithoutRawiNestedInput
  }

  export type HaditsCreateManyInput = {
    slug: string
    name: string
    total: number
  }

  export type HaditsUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
  }

  export type HaditsUncheckedUpdateManyInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
  }

  export type DetailHaditsCreateInput = {
    id: number
    number: number
    arab: string
    terjemah: string
    rawi: HaditsCreateNestedOneWithoutDetailsInput
  }

  export type DetailHaditsUncheckedCreateInput = {
    id: number
    number: number
    arab: string
    terjemah: string
    slug: string
  }

  export type DetailHaditsUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    arab?: StringFieldUpdateOperationsInput | string
    terjemah?: StringFieldUpdateOperationsInput | string
    rawi?: HaditsUpdateOneRequiredWithoutDetailsNestedInput
  }

  export type DetailHaditsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    arab?: StringFieldUpdateOperationsInput | string
    terjemah?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type DetailHaditsCreateManyInput = {
    id: number
    number: number
    arab: string
    terjemah: string
    slug: string
  }

  export type DetailHaditsUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    arab?: StringFieldUpdateOperationsInput | string
    terjemah?: StringFieldUpdateOperationsInput | string
  }

  export type DetailHaditsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    arab?: StringFieldUpdateOperationsInput | string
    terjemah?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type AsmaulHusnaCreateInput = {
    id: number
    latin: string
    arabic: string
    id_translation: string
    en_translation: string
  }

  export type AsmaulHusnaUncheckedCreateInput = {
    id: number
    latin: string
    arabic: string
    id_translation: string
    en_translation: string
  }

  export type AsmaulHusnaUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    latin?: StringFieldUpdateOperationsInput | string
    arabic?: StringFieldUpdateOperationsInput | string
    id_translation?: StringFieldUpdateOperationsInput | string
    en_translation?: StringFieldUpdateOperationsInput | string
  }

  export type AsmaulHusnaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    latin?: StringFieldUpdateOperationsInput | string
    arabic?: StringFieldUpdateOperationsInput | string
    id_translation?: StringFieldUpdateOperationsInput | string
    en_translation?: StringFieldUpdateOperationsInput | string
  }

  export type AsmaulHusnaCreateManyInput = {
    id: number
    latin: string
    arabic: string
    id_translation: string
    en_translation: string
  }

  export type AsmaulHusnaUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    latin?: StringFieldUpdateOperationsInput | string
    arabic?: StringFieldUpdateOperationsInput | string
    id_translation?: StringFieldUpdateOperationsInput | string
    en_translation?: StringFieldUpdateOperationsInput | string
  }

  export type AsmaulHusnaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    latin?: StringFieldUpdateOperationsInput | string
    arabic?: StringFieldUpdateOperationsInput | string
    id_translation?: StringFieldUpdateOperationsInput | string
    en_translation?: StringFieldUpdateOperationsInput | string
  }

  export type NiatSholatCreateInput = {
    number: number
    name: string
    arabic: string
    latin: string
    translation: string
  }

  export type NiatSholatUncheckedCreateInput = {
    number: number
    name: string
    arabic: string
    latin: string
    translation: string
  }

  export type NiatSholatUpdateInput = {
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    arabic?: StringFieldUpdateOperationsInput | string
    latin?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
  }

  export type NiatSholatUncheckedUpdateInput = {
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    arabic?: StringFieldUpdateOperationsInput | string
    latin?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
  }

  export type NiatSholatCreateManyInput = {
    number: number
    name: string
    arabic: string
    latin: string
    translation: string
  }

  export type NiatSholatUpdateManyMutationInput = {
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    arabic?: StringFieldUpdateOperationsInput | string
    latin?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
  }

  export type NiatSholatUncheckedUpdateManyInput = {
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    arabic?: StringFieldUpdateOperationsInput | string
    latin?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type AyatListRelationFilter = {
    every?: AyatWhereInput
    some?: AyatWhereInput
    none?: AyatWhereInput
  }

  export type AyatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SurahCountOrderByAggregateInput = {
    id?: SortOrder
    sequence?: SortOrder
    number_of_verses?: SortOrder
    name_short?: SortOrder
    name_long?: SortOrder
    name_en?: SortOrder
    name_id?: SortOrder
    translation_en?: SortOrder
    translation_id?: SortOrder
    revelation?: SortOrder
    revelation_en?: SortOrder
    revelation_id?: SortOrder
    tafsir?: SortOrder
    audio_url?: SortOrder
  }

  export type SurahAvgOrderByAggregateInput = {
    id?: SortOrder
    sequence?: SortOrder
    number_of_verses?: SortOrder
  }

  export type SurahMaxOrderByAggregateInput = {
    id?: SortOrder
    sequence?: SortOrder
    number_of_verses?: SortOrder
    name_short?: SortOrder
    name_long?: SortOrder
    name_en?: SortOrder
    name_id?: SortOrder
    translation_en?: SortOrder
    translation_id?: SortOrder
    revelation?: SortOrder
    revelation_en?: SortOrder
    revelation_id?: SortOrder
    tafsir?: SortOrder
    audio_url?: SortOrder
  }

  export type SurahMinOrderByAggregateInput = {
    id?: SortOrder
    sequence?: SortOrder
    number_of_verses?: SortOrder
    name_short?: SortOrder
    name_long?: SortOrder
    name_en?: SortOrder
    name_id?: SortOrder
    translation_en?: SortOrder
    translation_id?: SortOrder
    revelation?: SortOrder
    revelation_en?: SortOrder
    revelation_id?: SortOrder
    tafsir?: SortOrder
    audio_url?: SortOrder
  }

  export type SurahSumOrderByAggregateInput = {
    id?: SortOrder
    sequence?: SortOrder
    number_of_verses?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type SurahScalarRelationFilter = {
    is?: SurahWhereInput
    isNot?: SurahWhereInput
  }

  export type AyatCountOrderByAggregateInput = {
    id?: SortOrder
    surah_number?: SortOrder
    ayat_number?: SortOrder
    arabic?: SortOrder
    kitabah?: SortOrder
    latin?: SortOrder
    translation?: SortOrder
  }

  export type AyatAvgOrderByAggregateInput = {
    id?: SortOrder
    surah_number?: SortOrder
    ayat_number?: SortOrder
  }

  export type AyatMaxOrderByAggregateInput = {
    id?: SortOrder
    surah_number?: SortOrder
    ayat_number?: SortOrder
    arabic?: SortOrder
    kitabah?: SortOrder
    latin?: SortOrder
    translation?: SortOrder
  }

  export type AyatMinOrderByAggregateInput = {
    id?: SortOrder
    surah_number?: SortOrder
    ayat_number?: SortOrder
    arabic?: SortOrder
    kitabah?: SortOrder
    latin?: SortOrder
    translation?: SortOrder
  }

  export type AyatSumOrderByAggregateInput = {
    id?: SortOrder
    surah_number?: SortOrder
    ayat_number?: SortOrder
  }

  export type DetailHaditsListRelationFilter = {
    every?: DetailHaditsWhereInput
    some?: DetailHaditsWhereInput
    none?: DetailHaditsWhereInput
  }

  export type DetailHaditsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HaditsCountOrderByAggregateInput = {
    slug?: SortOrder
    name?: SortOrder
    total?: SortOrder
  }

  export type HaditsAvgOrderByAggregateInput = {
    total?: SortOrder
  }

  export type HaditsMaxOrderByAggregateInput = {
    slug?: SortOrder
    name?: SortOrder
    total?: SortOrder
  }

  export type HaditsMinOrderByAggregateInput = {
    slug?: SortOrder
    name?: SortOrder
    total?: SortOrder
  }

  export type HaditsSumOrderByAggregateInput = {
    total?: SortOrder
  }

  export type HaditsScalarRelationFilter = {
    is?: HaditsWhereInput
    isNot?: HaditsWhereInput
  }

  export type DetailHaditsCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    arab?: SortOrder
    terjemah?: SortOrder
    slug?: SortOrder
  }

  export type DetailHaditsAvgOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
  }

  export type DetailHaditsMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    arab?: SortOrder
    terjemah?: SortOrder
    slug?: SortOrder
  }

  export type DetailHaditsMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    arab?: SortOrder
    terjemah?: SortOrder
    slug?: SortOrder
  }

  export type DetailHaditsSumOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
  }

  export type AsmaulHusnaCountOrderByAggregateInput = {
    id?: SortOrder
    latin?: SortOrder
    arabic?: SortOrder
    id_translation?: SortOrder
    en_translation?: SortOrder
  }

  export type AsmaulHusnaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AsmaulHusnaMaxOrderByAggregateInput = {
    id?: SortOrder
    latin?: SortOrder
    arabic?: SortOrder
    id_translation?: SortOrder
    en_translation?: SortOrder
  }

  export type AsmaulHusnaMinOrderByAggregateInput = {
    id?: SortOrder
    latin?: SortOrder
    arabic?: SortOrder
    id_translation?: SortOrder
    en_translation?: SortOrder
  }

  export type AsmaulHusnaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NiatSholatCountOrderByAggregateInput = {
    number?: SortOrder
    name?: SortOrder
    arabic?: SortOrder
    latin?: SortOrder
    translation?: SortOrder
  }

  export type NiatSholatAvgOrderByAggregateInput = {
    number?: SortOrder
  }

  export type NiatSholatMaxOrderByAggregateInput = {
    number?: SortOrder
    name?: SortOrder
    arabic?: SortOrder
    latin?: SortOrder
    translation?: SortOrder
  }

  export type NiatSholatMinOrderByAggregateInput = {
    number?: SortOrder
    name?: SortOrder
    arabic?: SortOrder
    latin?: SortOrder
    translation?: SortOrder
  }

  export type NiatSholatSumOrderByAggregateInput = {
    number?: SortOrder
  }

  export type AyatCreateNestedManyWithoutSurahInput = {
    create?: XOR<AyatCreateWithoutSurahInput, AyatUncheckedCreateWithoutSurahInput> | AyatCreateWithoutSurahInput[] | AyatUncheckedCreateWithoutSurahInput[]
    connectOrCreate?: AyatCreateOrConnectWithoutSurahInput | AyatCreateOrConnectWithoutSurahInput[]
    createMany?: AyatCreateManySurahInputEnvelope
    connect?: AyatWhereUniqueInput | AyatWhereUniqueInput[]
  }

  export type AyatUncheckedCreateNestedManyWithoutSurahInput = {
    create?: XOR<AyatCreateWithoutSurahInput, AyatUncheckedCreateWithoutSurahInput> | AyatCreateWithoutSurahInput[] | AyatUncheckedCreateWithoutSurahInput[]
    connectOrCreate?: AyatCreateOrConnectWithoutSurahInput | AyatCreateOrConnectWithoutSurahInput[]
    createMany?: AyatCreateManySurahInputEnvelope
    connect?: AyatWhereUniqueInput | AyatWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type AyatUpdateManyWithoutSurahNestedInput = {
    create?: XOR<AyatCreateWithoutSurahInput, AyatUncheckedCreateWithoutSurahInput> | AyatCreateWithoutSurahInput[] | AyatUncheckedCreateWithoutSurahInput[]
    connectOrCreate?: AyatCreateOrConnectWithoutSurahInput | AyatCreateOrConnectWithoutSurahInput[]
    upsert?: AyatUpsertWithWhereUniqueWithoutSurahInput | AyatUpsertWithWhereUniqueWithoutSurahInput[]
    createMany?: AyatCreateManySurahInputEnvelope
    set?: AyatWhereUniqueInput | AyatWhereUniqueInput[]
    disconnect?: AyatWhereUniqueInput | AyatWhereUniqueInput[]
    delete?: AyatWhereUniqueInput | AyatWhereUniqueInput[]
    connect?: AyatWhereUniqueInput | AyatWhereUniqueInput[]
    update?: AyatUpdateWithWhereUniqueWithoutSurahInput | AyatUpdateWithWhereUniqueWithoutSurahInput[]
    updateMany?: AyatUpdateManyWithWhereWithoutSurahInput | AyatUpdateManyWithWhereWithoutSurahInput[]
    deleteMany?: AyatScalarWhereInput | AyatScalarWhereInput[]
  }

  export type AyatUncheckedUpdateManyWithoutSurahNestedInput = {
    create?: XOR<AyatCreateWithoutSurahInput, AyatUncheckedCreateWithoutSurahInput> | AyatCreateWithoutSurahInput[] | AyatUncheckedCreateWithoutSurahInput[]
    connectOrCreate?: AyatCreateOrConnectWithoutSurahInput | AyatCreateOrConnectWithoutSurahInput[]
    upsert?: AyatUpsertWithWhereUniqueWithoutSurahInput | AyatUpsertWithWhereUniqueWithoutSurahInput[]
    createMany?: AyatCreateManySurahInputEnvelope
    set?: AyatWhereUniqueInput | AyatWhereUniqueInput[]
    disconnect?: AyatWhereUniqueInput | AyatWhereUniqueInput[]
    delete?: AyatWhereUniqueInput | AyatWhereUniqueInput[]
    connect?: AyatWhereUniqueInput | AyatWhereUniqueInput[]
    update?: AyatUpdateWithWhereUniqueWithoutSurahInput | AyatUpdateWithWhereUniqueWithoutSurahInput[]
    updateMany?: AyatUpdateManyWithWhereWithoutSurahInput | AyatUpdateManyWithWhereWithoutSurahInput[]
    deleteMany?: AyatScalarWhereInput | AyatScalarWhereInput[]
  }

  export type SurahCreateNestedOneWithoutAyatInput = {
    create?: XOR<SurahCreateWithoutAyatInput, SurahUncheckedCreateWithoutAyatInput>
    connectOrCreate?: SurahCreateOrConnectWithoutAyatInput
    connect?: SurahWhereUniqueInput
  }

  export type SurahUpdateOneRequiredWithoutAyatNestedInput = {
    create?: XOR<SurahCreateWithoutAyatInput, SurahUncheckedCreateWithoutAyatInput>
    connectOrCreate?: SurahCreateOrConnectWithoutAyatInput
    upsert?: SurahUpsertWithoutAyatInput
    connect?: SurahWhereUniqueInput
    update?: XOR<XOR<SurahUpdateToOneWithWhereWithoutAyatInput, SurahUpdateWithoutAyatInput>, SurahUncheckedUpdateWithoutAyatInput>
  }

  export type DetailHaditsCreateNestedManyWithoutRawiInput = {
    create?: XOR<DetailHaditsCreateWithoutRawiInput, DetailHaditsUncheckedCreateWithoutRawiInput> | DetailHaditsCreateWithoutRawiInput[] | DetailHaditsUncheckedCreateWithoutRawiInput[]
    connectOrCreate?: DetailHaditsCreateOrConnectWithoutRawiInput | DetailHaditsCreateOrConnectWithoutRawiInput[]
    createMany?: DetailHaditsCreateManyRawiInputEnvelope
    connect?: DetailHaditsWhereUniqueInput | DetailHaditsWhereUniqueInput[]
  }

  export type DetailHaditsUncheckedCreateNestedManyWithoutRawiInput = {
    create?: XOR<DetailHaditsCreateWithoutRawiInput, DetailHaditsUncheckedCreateWithoutRawiInput> | DetailHaditsCreateWithoutRawiInput[] | DetailHaditsUncheckedCreateWithoutRawiInput[]
    connectOrCreate?: DetailHaditsCreateOrConnectWithoutRawiInput | DetailHaditsCreateOrConnectWithoutRawiInput[]
    createMany?: DetailHaditsCreateManyRawiInputEnvelope
    connect?: DetailHaditsWhereUniqueInput | DetailHaditsWhereUniqueInput[]
  }

  export type DetailHaditsUpdateManyWithoutRawiNestedInput = {
    create?: XOR<DetailHaditsCreateWithoutRawiInput, DetailHaditsUncheckedCreateWithoutRawiInput> | DetailHaditsCreateWithoutRawiInput[] | DetailHaditsUncheckedCreateWithoutRawiInput[]
    connectOrCreate?: DetailHaditsCreateOrConnectWithoutRawiInput | DetailHaditsCreateOrConnectWithoutRawiInput[]
    upsert?: DetailHaditsUpsertWithWhereUniqueWithoutRawiInput | DetailHaditsUpsertWithWhereUniqueWithoutRawiInput[]
    createMany?: DetailHaditsCreateManyRawiInputEnvelope
    set?: DetailHaditsWhereUniqueInput | DetailHaditsWhereUniqueInput[]
    disconnect?: DetailHaditsWhereUniqueInput | DetailHaditsWhereUniqueInput[]
    delete?: DetailHaditsWhereUniqueInput | DetailHaditsWhereUniqueInput[]
    connect?: DetailHaditsWhereUniqueInput | DetailHaditsWhereUniqueInput[]
    update?: DetailHaditsUpdateWithWhereUniqueWithoutRawiInput | DetailHaditsUpdateWithWhereUniqueWithoutRawiInput[]
    updateMany?: DetailHaditsUpdateManyWithWhereWithoutRawiInput | DetailHaditsUpdateManyWithWhereWithoutRawiInput[]
    deleteMany?: DetailHaditsScalarWhereInput | DetailHaditsScalarWhereInput[]
  }

  export type DetailHaditsUncheckedUpdateManyWithoutRawiNestedInput = {
    create?: XOR<DetailHaditsCreateWithoutRawiInput, DetailHaditsUncheckedCreateWithoutRawiInput> | DetailHaditsCreateWithoutRawiInput[] | DetailHaditsUncheckedCreateWithoutRawiInput[]
    connectOrCreate?: DetailHaditsCreateOrConnectWithoutRawiInput | DetailHaditsCreateOrConnectWithoutRawiInput[]
    upsert?: DetailHaditsUpsertWithWhereUniqueWithoutRawiInput | DetailHaditsUpsertWithWhereUniqueWithoutRawiInput[]
    createMany?: DetailHaditsCreateManyRawiInputEnvelope
    set?: DetailHaditsWhereUniqueInput | DetailHaditsWhereUniqueInput[]
    disconnect?: DetailHaditsWhereUniqueInput | DetailHaditsWhereUniqueInput[]
    delete?: DetailHaditsWhereUniqueInput | DetailHaditsWhereUniqueInput[]
    connect?: DetailHaditsWhereUniqueInput | DetailHaditsWhereUniqueInput[]
    update?: DetailHaditsUpdateWithWhereUniqueWithoutRawiInput | DetailHaditsUpdateWithWhereUniqueWithoutRawiInput[]
    updateMany?: DetailHaditsUpdateManyWithWhereWithoutRawiInput | DetailHaditsUpdateManyWithWhereWithoutRawiInput[]
    deleteMany?: DetailHaditsScalarWhereInput | DetailHaditsScalarWhereInput[]
  }

  export type HaditsCreateNestedOneWithoutDetailsInput = {
    create?: XOR<HaditsCreateWithoutDetailsInput, HaditsUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: HaditsCreateOrConnectWithoutDetailsInput
    connect?: HaditsWhereUniqueInput
  }

  export type HaditsUpdateOneRequiredWithoutDetailsNestedInput = {
    create?: XOR<HaditsCreateWithoutDetailsInput, HaditsUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: HaditsCreateOrConnectWithoutDetailsInput
    upsert?: HaditsUpsertWithoutDetailsInput
    connect?: HaditsWhereUniqueInput
    update?: XOR<XOR<HaditsUpdateToOneWithWhereWithoutDetailsInput, HaditsUpdateWithoutDetailsInput>, HaditsUncheckedUpdateWithoutDetailsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type AyatCreateWithoutSurahInput = {
    id: number
    ayat_number: number
    arabic: string
    kitabah: string
    latin: string
    translation: string
  }

  export type AyatUncheckedCreateWithoutSurahInput = {
    id: number
    ayat_number: number
    arabic: string
    kitabah: string
    latin: string
    translation: string
  }

  export type AyatCreateOrConnectWithoutSurahInput = {
    where: AyatWhereUniqueInput
    create: XOR<AyatCreateWithoutSurahInput, AyatUncheckedCreateWithoutSurahInput>
  }

  export type AyatCreateManySurahInputEnvelope = {
    data: AyatCreateManySurahInput | AyatCreateManySurahInput[]
  }

  export type AyatUpsertWithWhereUniqueWithoutSurahInput = {
    where: AyatWhereUniqueInput
    update: XOR<AyatUpdateWithoutSurahInput, AyatUncheckedUpdateWithoutSurahInput>
    create: XOR<AyatCreateWithoutSurahInput, AyatUncheckedCreateWithoutSurahInput>
  }

  export type AyatUpdateWithWhereUniqueWithoutSurahInput = {
    where: AyatWhereUniqueInput
    data: XOR<AyatUpdateWithoutSurahInput, AyatUncheckedUpdateWithoutSurahInput>
  }

  export type AyatUpdateManyWithWhereWithoutSurahInput = {
    where: AyatScalarWhereInput
    data: XOR<AyatUpdateManyMutationInput, AyatUncheckedUpdateManyWithoutSurahInput>
  }

  export type AyatScalarWhereInput = {
    AND?: AyatScalarWhereInput | AyatScalarWhereInput[]
    OR?: AyatScalarWhereInput[]
    NOT?: AyatScalarWhereInput | AyatScalarWhereInput[]
    id?: IntFilter<"Ayat"> | number
    surah_number?: IntFilter<"Ayat"> | number
    ayat_number?: IntFilter<"Ayat"> | number
    arabic?: StringFilter<"Ayat"> | string
    kitabah?: StringFilter<"Ayat"> | string
    latin?: StringFilter<"Ayat"> | string
    translation?: StringFilter<"Ayat"> | string
  }

  export type SurahCreateWithoutAyatInput = {
    id: number
    sequence: number
    number_of_verses: number
    name_short: string
    name_long: string
    name_en: string
    name_id: string
    translation_en: string
    translation_id: string
    revelation: string
    revelation_en: string
    revelation_id: string
    tafsir: string
    audio_url: string
  }

  export type SurahUncheckedCreateWithoutAyatInput = {
    id: number
    sequence: number
    number_of_verses: number
    name_short: string
    name_long: string
    name_en: string
    name_id: string
    translation_en: string
    translation_id: string
    revelation: string
    revelation_en: string
    revelation_id: string
    tafsir: string
    audio_url: string
  }

  export type SurahCreateOrConnectWithoutAyatInput = {
    where: SurahWhereUniqueInput
    create: XOR<SurahCreateWithoutAyatInput, SurahUncheckedCreateWithoutAyatInput>
  }

  export type SurahUpsertWithoutAyatInput = {
    update: XOR<SurahUpdateWithoutAyatInput, SurahUncheckedUpdateWithoutAyatInput>
    create: XOR<SurahCreateWithoutAyatInput, SurahUncheckedCreateWithoutAyatInput>
    where?: SurahWhereInput
  }

  export type SurahUpdateToOneWithWhereWithoutAyatInput = {
    where?: SurahWhereInput
    data: XOR<SurahUpdateWithoutAyatInput, SurahUncheckedUpdateWithoutAyatInput>
  }

  export type SurahUpdateWithoutAyatInput = {
    id?: IntFieldUpdateOperationsInput | number
    sequence?: IntFieldUpdateOperationsInput | number
    number_of_verses?: IntFieldUpdateOperationsInput | number
    name_short?: StringFieldUpdateOperationsInput | string
    name_long?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    translation_en?: StringFieldUpdateOperationsInput | string
    translation_id?: StringFieldUpdateOperationsInput | string
    revelation?: StringFieldUpdateOperationsInput | string
    revelation_en?: StringFieldUpdateOperationsInput | string
    revelation_id?: StringFieldUpdateOperationsInput | string
    tafsir?: StringFieldUpdateOperationsInput | string
    audio_url?: StringFieldUpdateOperationsInput | string
  }

  export type SurahUncheckedUpdateWithoutAyatInput = {
    id?: IntFieldUpdateOperationsInput | number
    sequence?: IntFieldUpdateOperationsInput | number
    number_of_verses?: IntFieldUpdateOperationsInput | number
    name_short?: StringFieldUpdateOperationsInput | string
    name_long?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_id?: StringFieldUpdateOperationsInput | string
    translation_en?: StringFieldUpdateOperationsInput | string
    translation_id?: StringFieldUpdateOperationsInput | string
    revelation?: StringFieldUpdateOperationsInput | string
    revelation_en?: StringFieldUpdateOperationsInput | string
    revelation_id?: StringFieldUpdateOperationsInput | string
    tafsir?: StringFieldUpdateOperationsInput | string
    audio_url?: StringFieldUpdateOperationsInput | string
  }

  export type DetailHaditsCreateWithoutRawiInput = {
    id: number
    number: number
    arab: string
    terjemah: string
  }

  export type DetailHaditsUncheckedCreateWithoutRawiInput = {
    id: number
    number: number
    arab: string
    terjemah: string
  }

  export type DetailHaditsCreateOrConnectWithoutRawiInput = {
    where: DetailHaditsWhereUniqueInput
    create: XOR<DetailHaditsCreateWithoutRawiInput, DetailHaditsUncheckedCreateWithoutRawiInput>
  }

  export type DetailHaditsCreateManyRawiInputEnvelope = {
    data: DetailHaditsCreateManyRawiInput | DetailHaditsCreateManyRawiInput[]
  }

  export type DetailHaditsUpsertWithWhereUniqueWithoutRawiInput = {
    where: DetailHaditsWhereUniqueInput
    update: XOR<DetailHaditsUpdateWithoutRawiInput, DetailHaditsUncheckedUpdateWithoutRawiInput>
    create: XOR<DetailHaditsCreateWithoutRawiInput, DetailHaditsUncheckedCreateWithoutRawiInput>
  }

  export type DetailHaditsUpdateWithWhereUniqueWithoutRawiInput = {
    where: DetailHaditsWhereUniqueInput
    data: XOR<DetailHaditsUpdateWithoutRawiInput, DetailHaditsUncheckedUpdateWithoutRawiInput>
  }

  export type DetailHaditsUpdateManyWithWhereWithoutRawiInput = {
    where: DetailHaditsScalarWhereInput
    data: XOR<DetailHaditsUpdateManyMutationInput, DetailHaditsUncheckedUpdateManyWithoutRawiInput>
  }

  export type DetailHaditsScalarWhereInput = {
    AND?: DetailHaditsScalarWhereInput | DetailHaditsScalarWhereInput[]
    OR?: DetailHaditsScalarWhereInput[]
    NOT?: DetailHaditsScalarWhereInput | DetailHaditsScalarWhereInput[]
    id?: IntFilter<"DetailHadits"> | number
    number?: IntFilter<"DetailHadits"> | number
    arab?: StringFilter<"DetailHadits"> | string
    terjemah?: StringFilter<"DetailHadits"> | string
    slug?: StringFilter<"DetailHadits"> | string
  }

  export type HaditsCreateWithoutDetailsInput = {
    slug: string
    name: string
    total: number
  }

  export type HaditsUncheckedCreateWithoutDetailsInput = {
    slug: string
    name: string
    total: number
  }

  export type HaditsCreateOrConnectWithoutDetailsInput = {
    where: HaditsWhereUniqueInput
    create: XOR<HaditsCreateWithoutDetailsInput, HaditsUncheckedCreateWithoutDetailsInput>
  }

  export type HaditsUpsertWithoutDetailsInput = {
    update: XOR<HaditsUpdateWithoutDetailsInput, HaditsUncheckedUpdateWithoutDetailsInput>
    create: XOR<HaditsCreateWithoutDetailsInput, HaditsUncheckedCreateWithoutDetailsInput>
    where?: HaditsWhereInput
  }

  export type HaditsUpdateToOneWithWhereWithoutDetailsInput = {
    where?: HaditsWhereInput
    data: XOR<HaditsUpdateWithoutDetailsInput, HaditsUncheckedUpdateWithoutDetailsInput>
  }

  export type HaditsUpdateWithoutDetailsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
  }

  export type HaditsUncheckedUpdateWithoutDetailsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
  }

  export type AyatCreateManySurahInput = {
    id: number
    ayat_number: number
    arabic: string
    kitabah: string
    latin: string
    translation: string
  }

  export type AyatUpdateWithoutSurahInput = {
    id?: IntFieldUpdateOperationsInput | number
    ayat_number?: IntFieldUpdateOperationsInput | number
    arabic?: StringFieldUpdateOperationsInput | string
    kitabah?: StringFieldUpdateOperationsInput | string
    latin?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
  }

  export type AyatUncheckedUpdateWithoutSurahInput = {
    id?: IntFieldUpdateOperationsInput | number
    ayat_number?: IntFieldUpdateOperationsInput | number
    arabic?: StringFieldUpdateOperationsInput | string
    kitabah?: StringFieldUpdateOperationsInput | string
    latin?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
  }

  export type AyatUncheckedUpdateManyWithoutSurahInput = {
    id?: IntFieldUpdateOperationsInput | number
    ayat_number?: IntFieldUpdateOperationsInput | number
    arabic?: StringFieldUpdateOperationsInput | string
    kitabah?: StringFieldUpdateOperationsInput | string
    latin?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
  }

  export type DetailHaditsCreateManyRawiInput = {
    id: number
    number: number
    arab: string
    terjemah: string
  }

  export type DetailHaditsUpdateWithoutRawiInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    arab?: StringFieldUpdateOperationsInput | string
    terjemah?: StringFieldUpdateOperationsInput | string
  }

  export type DetailHaditsUncheckedUpdateWithoutRawiInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    arab?: StringFieldUpdateOperationsInput | string
    terjemah?: StringFieldUpdateOperationsInput | string
  }

  export type DetailHaditsUncheckedUpdateManyWithoutRawiInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    arab?: StringFieldUpdateOperationsInput | string
    terjemah?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}